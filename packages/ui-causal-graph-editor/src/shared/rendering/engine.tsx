/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Cull } from '@pixi-essentials/cull';
import FontFaceObserver from 'fontfaceobserver';
import { LayoutMapping, XYPosition, assignLayout } from 'graphology-layout/utils';
import debounce from 'lodash/debounce';
import { Viewport } from 'pixi-viewport';
import * as PIXI from 'pixi.js';

import { DefaultTheme } from '@darajs/styled-components';

import { CustomLayout, FcoseLayout, GraphLayout } from '@shared/graph-layout';
import { DragMode } from '@shared/use-drag-mode';
import { getNodeGroup } from '@shared/utils';
import {
    EdgeConstraint,
    EdgeType,
    EditorMode,
    SimulationEdge,
    SimulationGraph,
    SimulationNode,
    ZoomThresholds,
} from '@types';

import { Background } from './background';
import { EDGE_STRENGTHS, EdgeObject, EdgeStrengthDefinition, PixiEdgeStyle } from './edge';
import { NodeObject, PixiNodeStyle, getNodeSize } from './node';
import { FONT_FAMILY } from './text';
import { TextureCache } from './texture-cache';
import { colorToPixi, getZoomState } from './utils';

const WORLD_PADDING = 100;

const TEMP_EDGE_SYMBOL = Symbol('TEMP_EDGE');

const fontObserver = new FontFaceObserver(FONT_FAMILY);

export interface EngineEvents {
    backgroundClick: () => void;
    createEdge: (event: PIXI.FederatedMouseEvent, source: string, target: string) => void;
    dragEnd: () => void;
    dragStart: () => void;
    edgeClick: (event: PIXI.FederatedMouseEvent, source: string, target: string) => void;
    edgeMouseout: (event: PIXI.FederatedMouseEvent, edgeKey: string) => void;
    edgeMouseover: (event: PIXI.FederatedMouseEvent, edgeKey: string) => void;
    nodeClick: (event: PIXI.FederatedMouseEvent, nodeKey: string) => void;
    nodeMouseout: (event: PIXI.FederatedMouseEvent, nodeKey: string) => void;
    nodeMouseover: (event: PIXI.FederatedMouseEvent, nodeKey: string) => void;
}
export const ENGINE_EVENTS: Array<keyof EngineEvents> = [
    'createEdge',
    'backgroundClick',
    'edgeClick',
    'nodeClick',
    'dragStart',
    'dragEnd',
    'nodeMouseover',
    'nodeMouseout',
    'edgeMouseout',
    'edgeMouseover',
];

export class Engine extends PIXI.utils.EventEmitter<EngineEvents> {
    /** App instance */
    private app: PIXI.Application;

    /** Background object */
    private background: Background;

    /** Available edge constraints */
    private constraints: EdgeConstraint[];

    /** Parent container where canvas is rendered in */
    private container: HTMLElement;

    /** Debounced version of `this.updateLayout` in case multiple changes come in at the same time */
    public debouncedUpdateLayout = debounce(this.updateLayout, 150, { trailing: true });

    /** Current drag mode */
    private dragMode: DragMode = null;

    /** Container storing edge graphics */
    private edgeLayer: PIXI.Container;

    /** Edge ID -> EdgeObject cache */
    private edgeMap = new Map<string | symbol, EdgeObject>();

    /** Container storing edge symbol graphics */
    private edgeSymbolsLayer: PIXI.Container;

    /** Whether the graph is editable */
    private editable: boolean;

    /** Current editor mode */
    private editorMode: EditorMode;

    /** Graph state */
    private graph: SimulationGraph;

    /** Whether engine has been started */
    public initialized = false;

    /** Whether there is an edge being created */
    private isCreatingEdge = false;

    /** Whether a node is being moved */
    private isMovingNode = false;

    /** Graph layout instance */
    private layout?: GraphLayout;

    /** Which edge the user is holding down mouse button on */
    private mousedownEdgeKey: string | null = null;

    /** Which node the user is holding down mouse button on */
    private mousedownNodeKey: string | null = null;

    /** Container storing node label graphics */
    private nodeLabelLayer: PIXI.Container;

    /** Container storing node graphics */
    private nodeLayer: PIXI.Container;

    /** Node ID -> NodeObject cache */
    private nodeMap = new Map<string, NodeObject>();

    /** Center position of the node user pressed mousedown on, stored while user is holding down mouse1 */
    private nodeMousedownCenterPosition: PIXI.Point = null;

    /** Last mousedown event position stored while user is holding down mouse1 */
    private nodeMousedownPosition: PIXI.Point = null;

    /** Callback executed when a node is added */
    private onAddNode?: () => void = null;

    /** Callback executed when an edge is added */
    private onAddEdge?: () => void = null;

    /** Callback executed when engine is being destroyed */
    private onCleanup?: () => void = null;

    // Bound versions of handlers
    private onGraphAttributesUpdatedBound = this.onGraphAttributesUpdated.bind(this);

    private onGraphNodeAddedBound = this.onGraphNodeAdded.bind(this);

    private onGraphEdgeAddedBound = this.onGraphEdgeAdded.bind(this);

    private onGraphEdgeDroppedBound = this.onGraphEdgeDropped.bind(this);

    private onGraphNodeDroppedBound = this.onGraphNodeDropped.bind(this);

    private onGraphEdgeAttributesUpdatedBound = this.onGraphEdgeAttributesUpdated.bind(this);

    private onGraphNodeAttributesUpdatedBound = this.onGraphNodeAttributesUpdated.bind(this);

    private onDocumentMouseMoveBound = this.onDocumentMouseMove.bind(this);

    private onDocumentMouseUpBound = this.onDocumentMouseUp.bind(this);

    /** Callback executed when a drag motion is done */
    private onEndDrag?: () => void = null;

    /** Callback executed when a node is being moved */
    private onMove?: (nodeId: string, x: number, y: number) => void = null;

    /** Callback executed when a drag motion is started */
    private onStartDrag?: () => void = null;

    /** Last render request ID - used to skip extra render calls */
    private renderRequestId: number = null;

    /** ResizeObserver instance watching window resizes */
    private resizeObserver: ResizeObserver;

    /** Current node search results */
    private searchResults: string[] = [];

    /** Currently selected edge. We keep track of it here so we can unselect it when need be */
    private selectedEdge: [string, string] | null = null;

    /** Currently selected node. We keep track of it here so we can unselect it when need be */
    private selectedNode: string | null = null;

    /** Current range of edge strength values provided in meta attributes */
    private strengthRange: [number, number] = null;

    /** Texture cache instance */
    private textureCache: TextureCache;

    /** Current theme */
    private theme: DefaultTheme;

    /** Graph UID */
    private uid: string;

    /** Viewport instance */
    private viewport: Viewport;

    /** Optional user-provided zoom thresholds */
    private zoomThresholds?: ZoomThresholds;

    constructor(
        graph: SimulationGraph,
        layout: GraphLayout,
        editable: boolean,
        editorMode: EditorMode,
        theme: DefaultTheme,
        constraints?: EdgeConstraint[],
        zoomThresholds?: ZoomThresholds
    ) {
        super();
        this.graph = graph;
        this.editable = editable;
        this.editorMode = editorMode;
        this.layout = layout;
        this.theme = theme;
        this.constraints = constraints;
        this.zoomThresholds = zoomThresholds;
        PIXI.Filter.defaultResolution = 3;
    }

    /**
     * Get the center position of the rendered viewport
     */
    public getCenterPosition(): PIXI.IPointData {
        return { x: this.viewport.center.x, y: this.viewport.center.y };
    }

    /**
     * Cleanup the app appropriately
     */
    public destroy(): void {
        // remove listeners
        this.graph.off('attributesUpdated', this.onGraphAttributesUpdatedBound);
        this.graph.off('nodeAdded', this.onGraphNodeAddedBound);
        this.graph.off('edgeAdded', this.onGraphEdgeAddedBound);
        this.graph.off('edgeDropped', this.onGraphEdgeDroppedBound);
        this.graph.off('nodeDropped', this.onGraphNodeDroppedBound);
        this.graph.off('edgeAttributesUpdated', this.onGraphEdgeAttributesUpdatedBound);
        this.graph.off('nodeAttributesUpdated', this.onGraphNodeAttributesUpdatedBound);

        this.onCleanup?.();
        this.textureCache.destroy();
        this.resizeObserver.disconnect();
        this.app.destroy(true, true);
    }

    /**
     * Request the graph to be re-rendered
     */
    public requestRender(): void {
        if (this.renderRequestId) {
            return;
        }

        this.renderRequestId = requestAnimationFrame(() => {
            if (this.viewport && this.app.stage) {
                this.graph.forEachEdge((e, attrs, source, target, sourceNodeAttributes, targetNodeAttributes) => {
                    const edgeObject = this.edgeMap.get(e);
                    if (edgeObject && attrs.points) {
                        const edgeStyle = this.getEdgeStyle(edgeObject, attrs);
                        const sourceNode = this.nodeMap.get(source);
                        const targetNode = this.nodeMap.get(target);
                        const sourceNodePosition = { x: sourceNodeAttributes.x, y: sourceNodeAttributes.y };
                        const targetNodePosition = { x: targetNodeAttributes.x, y: targetNodeAttributes.y };

                        edgeObject.updatePosition(
                            edgeStyle,
                            sourceNodePosition,
                            targetNodePosition,
                            sourceNode.nodeGfx.width,
                            targetNode.nodeGfx.width,
                            this.viewport,
                            this.textureCache
                        );
                    }
                });
            }

            if (this.app.renderer) {
                this.updateGraphVisibility();
            }
            if (this.app.stage) {
                this.app.render();
            }
            this.renderRequestId = null;
        });
    }

    /**
     * Reset the viewport to fit the graph centered on screen
     */
    public resetViewport(): void {
        // figure out the x/y bounds
        const nodesX = this.graph.mapNodes((nodeKey) => this.graph.getNodeAttribute(nodeKey, 'x'));
        const nodesY = this.graph.mapNodes((nodeKey) => this.graph.getNodeAttribute(nodeKey, 'y'));
        const minX = Math.min(...nodesX);
        const maxX = Math.max(...nodesX);
        const minY = Math.min(...nodesY);
        const maxY = Math.max(...nodesY);

        // compute graph size
        const graphWidth = Math.abs(maxX - minX);
        const graphHeight = Math.abs(maxY - minY);
        const graphCenter = new PIXI.Point(minX + graphWidth / 2, minY + graphHeight / 2);

        const worldWidth = graphWidth + WORLD_PADDING * 2;
        const worldHeight = graphHeight + WORLD_PADDING * 2;

        this.viewport.resize(this.container.clientWidth, this.container.clientHeight, worldWidth, worldHeight);

        this.viewport.setZoom(1);
        this.viewport.center = graphCenter;
        this.viewport.fit(true);

        this.updateGraphVisibility();
    }

    /**
     * Update matched status based on new search result
     *
     * @param ids ids found in search result
     */
    public searchNodes(ids: string[]): void {
        const newNodes = ids.filter((newId) => !this.searchResults.includes(newId));
        const removedNodes = this.searchResults.filter((oldId) => !ids.includes(oldId));

        for (const nodeId of newNodes) {
            const node = this.nodeMap.get(nodeId);

            if (node) {
                node.state.matched = true;
                this.updateNodeStyleByKey(nodeId);
            }
        }

        for (const nodeId of removedNodes) {
            const node = this.nodeMap.get(nodeId);

            if (node) {
                node.state.matched = false;
                this.updateNodeStyleByKey(nodeId);
            }
        }

        this.searchResults = ids;
        this.requestRender();
    }

    /**
     * Select an edge with given id
     *
     * @param id id of the edge
     */
    public selectEdge(path: [string, string]): void {
        // If there was a previously selected edge, unselect it
        if (this.selectedEdge) {
            const id = this.graph.edge(this.selectedEdge[0], this.selectedEdge[1]);
            const edge = this.edgeMap.get(id);

            // Check if it exists - could've been removed
            if (edge) {
                edge.state.selected = false;
            }

            // also unselect the extremities
            const [source, target] = this.selectedEdge;
            const sourceNode = this.nodeMap.get(source);
            const targetNode = this.nodeMap.get(target);
            if (sourceNode) {
                sourceNode.state.attachedEdgeSelected = false;
            }
            if (targetNode) {
                targetNode.state.attachedEdgeSelected = false;
            }
        }

        // Select new edge if specified
        if (path) {
            const [source, target] = path;
            const id = this.graph.edge(source, target);
            const edge = this.edgeMap.get(id);
            if (edge) {
                edge.state.selected = true;
                this.selectedEdge = [source, target];

                // also select the extremities
                const sourceNode = this.nodeMap.get(source);
                const targetNode = this.nodeMap.get(target);
                if (sourceNode) {
                    sourceNode.state.attachedEdgeSelected = true;
                }
                if (targetNode) {
                    targetNode.state.attachedEdgeSelected = true;
                }
            }
        } else {
            this.selectedEdge = null;
        }

        // Update all visuals as we might need to dim things
        this.updateStyles();
        this.requestRender();
    }

    /**
     * Select a node with given id
     *
     * @param id id of the node
     */
    public selectNode(id: string): void {
        // Nodes cannot be selected in edge encoder mode
        if (this.editorMode === EditorMode.EDGE_ENCODER) {
            return;
        }

        // If there was a previously selected node, unselect it
        if (this.selectedNode) {
            const node = this.nodeMap.get(this.selectedNode);

            // Check if node exists - could've been removed
            if (node) {
                node.state.selected = false;
            }
        }

        // Select new node if specified
        if (id) {
            const node = this.nodeMap.get(id);
            node.state.selected = true;
        }

        this.selectedNode = id;

        // Update all visuals as we might need to dim things
        this.updateStyles();
        this.requestRender();
    }

    /**
     * Update drag mode
     *
     * @param dragMode drag mode to set
     */
    public setDragMode(dragMode: DragMode): void {
        this.dragMode = dragMode;
    }

    /**
     * Update theme used
     *
     * @param theme theme used
     */
    public setTheme(theme: DefaultTheme): void {
        this.theme = theme;
        this.background.updateTexture(theme, this.textureCache);
        [(this.app.renderer as PIXI.Renderer).background.color] = colorToPixi(this.theme.colors.blue1);

        this.updateStyles();
        this.requestRender();
    }

    /**
     * Start the rendering engine
     *
     * @param container container to start in - canvas will be injected into it
     */
    public async start(container: HTMLElement): Promise<void> {
        // Wait for font to be available
        await fontObserver.load();

        this.container = container;
        const [initialColor] = colorToPixi(this.theme.colors.blue1);

        this.app = new PIXI.Application({
            antialias: true,
            autoDensity: true,
            autoStart: false,
            backgroundAlpha: 1,
            backgroundColor: initialColor,
            powerPreference: 'high-performance',
            resizeTo: container,
            resolution: window.devicePixelRatio,
        });

        // Add a canvas to the container
        container.appendChild(this.app.view as HTMLCanvasElement);
        this.textureCache = new TextureCache(this.app.renderer);

        this.app.view.addEventListener('wheel', (event) => {
            event.preventDefault();
        });

        // Create viewport and add it to the app
        this.viewport = new Viewport({
            events: this.app.renderer.events,
        });

        // enable viewport features
        this.viewport.drag().pinch().wheel().decelerate().clampZoom({ maxScale: 2 });

        this.viewport.addEventListener('frame-end', () => {
            if (this.viewport.dirty) {
                this.requestRender();
                this.viewport.dirty = false;
            }
        });

        // Set bg
        this.background = new Background(this.theme, this.textureCache, this.viewport);
        this.background.on('click', () => this.emit('backgroundClick'));
        this.background.updatePosition(this.container);

        // Add background before viewport so viewport takes events first
        this.app.stage.addChild(this.background.sprite);
        this.app.stage.addChild(this.viewport);

        // create layers - containers to hold different rendered parts of the graph
        this.edgeLayer = new PIXI.Container();
        this.edgeSymbolsLayer = new PIXI.Container();
        this.nodeLayer = new PIXI.Container();
        this.nodeLabelLayer = new PIXI.Container();
        this.viewport.addChild(this.edgeLayer);
        this.viewport.addChild(this.edgeSymbolsLayer);
        this.viewport.addChild(this.nodeLayer);
        this.viewport.addChild(this.nodeLabelLayer);

        // obesrve window resizing
        this.resizeObserver = new ResizeObserver(() => {
            this.app.resize();
            this.viewport.resize(this.container.clientWidth, this.container.clientHeight);
            this.background.updatePosition(this.container);
            this.updateGraphVisibility();
            this.requestRender();
        });

        this.resizeObserver.observe(this.container);

        // setup listeners so engine can react to changes made to the graph instance
        this.graph.on('attributesUpdated', this.onGraphAttributesUpdatedBound);
        this.graph.on('nodeAdded', this.onGraphNodeAddedBound);
        this.graph.on('edgeAdded', this.onGraphEdgeAddedBound);
        this.graph.on('edgeDropped', this.onGraphEdgeDroppedBound);
        this.graph.on('nodeDropped', this.onGraphNodeDroppedBound);
        this.graph.on('edgeAttributesUpdated', this.onGraphEdgeAttributesUpdatedBound);
        this.graph.on('nodeAttributesUpdated', this.onGraphNodeAttributesUpdatedBound);

        const nodesX = this.graph.mapNodes((nodeKey) => this.graph.getNodeAttribute(nodeKey, 'x'));
        const nodesY = this.graph.mapNodes((nodeKey) => this.graph.getNodeAttribute(nodeKey, 'y'));
        const initialPositionsDefined =
            nodesX.every((nx) => nx !== undefined) && nodesY.every((ny) => ny !== undefined);

        // Set base size for layout computations
        this.graph.updateAttribute('size', () => (this.layout.nodeSize ? this.layout.nodeSize * 1.5 : 50));

        // Skip initial layout computation if all nodes have x/y defined
        if (!initialPositionsDefined) {
            // if user provided a custom layout without positions, fall back to Fcose as a good default
            // TODO: in the future only do this if the custom layout does not have a callback provided
            if (this.layout instanceof CustomLayout) {
                this.layout = FcoseLayout.Builder.nodeSize(this.layout.nodeSize)
                    .nodeFontSize(this.layout.nodeFontSize)
                    .build();
            }
            this.updateLayout();
        }

        this.createGraph();
        this.resetViewport();
        // need to update styles once again after changing the viewport
        this.updateStyles();
        this.initialized = true;
        this.resetViewport();
    }

    /**
     * Update the set of constraints
     *
     * @param constraints new constraints
     */
    public updateConstraints(constraints: EdgeConstraint[]): void {
        this.constraints = constraints;
        this.graph.forEachEdge((k) => this.updateEdgeStyleByKey(k));
        this.requestRender();
    }

    /**
     * Create an edge
     *
     * @param id edge id
     * @param attributes  edge attributes
     * @param source source node id
     * @param target target node i
     * @param sourceAttributes source node attributes
     * @param targetAttributes target node attributes
     */
    private createEdge(
        id: string,
        attributes: SimulationEdge,
        source: string,
        target: string,
        sourceAttributes: SimulationNode,
        targetAttributes: SimulationNode
    ): void {
        const edge = new EdgeObject();
        this.edgeLayer.addChild(edge.edgeGfx);
        this.edgeSymbolsLayer.addChild(edge.edgeSymbolsGfx);
        this.edgeMap.set(id, edge);

        edge.addListener('mouseover', (event: PIXI.FederatedMouseEvent) => {
            if (!this.mousedownNodeKey) {
                this.hoverEdge(id);
                this.emit('edgeMouseover', event, id);
            }
        });
        edge.addListener('mouseout', (event: PIXI.FederatedMouseEvent) => {
            this.unhoverEdge(id);
            this.emit('edgeMouseout', event, id);
        });

        edge.addListener('mousedown', () => {
            this.mousedownNodeKey = null;
            this.mousedownEdgeKey = id;
        });
        edge.addListener('mouseup', (event: PIXI.FederatedMouseEvent) => {
            if (this.mousedownEdgeKey === id) {
                this.emit('edgeClick', event, source, target);
            }
        });

        // Update edge and the source as we were dragging from it
        this.updateEdgeStyle(id, attributes, source, target, sourceAttributes, targetAttributes);
    }

    /**
     * Create the graph.
     *
     * Creates edges and nodes based on current graph state.
     */
    private createGraph(): void {
        this.graph.forEachNode(this.createNode.bind(this));
        this.graph.forEachEdge(this.createEdge.bind(this));
        this.updateStrengthRange();
    }

    /**
     * Create a node
     *
     * @param id node id
     * @param attributes node attributes
     */
    private createNode(id: string, attributes: SimulationNode): void {
        const node = new NodeObject();
        this.nodeLayer.addChild(node.nodeGfx);
        this.nodeLabelLayer.addChild(node.nodeLabelGfx);
        this.nodeMap.set(id, node);

        node.addListener('mouseover', (event: PIXI.FederatedMouseEvent) => {
            // Always show hover state
            this.hoverNode(id);

            // Only trigger the event (i.e. tooltip) if not currently dragging
            if (!this.mousedownNodeKey) {
                this.emit('nodeMouseover', event, id);
            }
        });
        node.addListener('mouseout', (event: PIXI.FederatedMouseEvent) => {
            const local = node.nodeGfx.toLocal(event.global);
            const isInNode = node.nodeGfx.hitArea.contains(local.x, local.y);

            // only trigger mouseout if it's actually outside the node (could be within label)
            if (!isInNode) {
                this.unhoverNode(id);
                this.emit('nodeMouseout', event, id);
            }

            if (!this.editable) {
                // resets mousedown position
                this.mousedownNodeKey = null;
            }
        });

        node.addListener('mousedown', (event: PIXI.FederatedMouseEvent) => {
            this.mousedownEdgeKey = null;
            this.mousedownNodeKey = id;

            if (this.dragMode) {
                this.enableDragBehaviour();
            }

            this.nodeMousedownCenterPosition = node.nodeGfx.getGlobalPosition().clone();
            this.nodeMousedownPosition = event.global.clone();
        });
        node.addListener('mouseup', (event: PIXI.FederatedMouseEvent) => {
            // If mouseup happened on the same node mousedown happened
            if (this.mousedownNodeKey === id && this.nodeMousedownPosition) {
                const xOffset = Math.abs(this.nodeMousedownPosition.x - event.global.x);
                const yOffset = Math.abs(this.nodeMousedownPosition.y - event.global.y);

                // only trigger click if the mousedown&mouseup happened very close to each other
                if (xOffset <= 2 && yOffset <= 2) {
                    this.emit('nodeClick', event, id);
                }
            }

            // If mouseup happened on a different node
            if (this.isCreatingEdge && this.mousedownNodeKey && this.mousedownNodeKey !== id) {
                // check if the edge doesn't already exist
                if (!this.graph.hasEdge(this.mousedownNodeKey, id)) {
                    // emit event to create a real edge
                    this.emit('createEdge', event, this.mousedownNodeKey, id);
                }
            }
            if (!this.editable) {
                // resets mousedown position
                this.mousedownNodeKey = null;
            }
        });

        this.updateNodeStyle(id, attributes);
    }

    /**
     * Drop the edge graphics from the renderer
     *
     * @param id edge id
     */
    private dropEdge(id: string): void {
        const edge = this.edgeMap.get(id);

        if (edge) {
            this.edgeLayer.removeChild(edge.edgeGfx);
            this.edgeSymbolsLayer.removeChild(edge.edgeSymbolsGfx);
            this.edgeMap.delete(id);
        }
    }

    /**
     * Drop the node graphics from the renderer
     *
     * @param id node id
     */
    private dropNode(id: string): void {
        const node = this.nodeMap.get(id);

        if (node) {
            this.nodeLayer.removeChild(node.nodeGfx);
            this.nodeLabelLayer.removeChild(node.nodeLabelGfx);
            this.nodeMap.delete(id);
            this.requestRender();
        }
    }

    /**
     * Enables drag behaviour
     *
     * Pauses viewport dragging and installs listeners for mouse movement
     */
    private enableDragBehaviour(): void {
        if (this.dragMode === 'move_node') {
            this.isMovingNode = true;
            this.isCreatingEdge = false;

            this.onStartDrag?.();
        }
        if (this.dragMode === 'create_edge') {
            this.isCreatingEdge = true;
            this.isMovingNode = false;

            // Create a temporary edge
            const tempEdge = new EdgeObject(true);
            this.edgeLayer.addChild(tempEdge.edgeGfx);
            this.edgeMap.set(TEMP_EDGE_SYMBOL, tempEdge);
        }

        this.viewport.pause = true; // disable viewport dragging

        document.addEventListener('mousemove', this.onDocumentMouseMoveBound);
        document.addEventListener('mouseup', this.onDocumentMouseUpBound, { once: true });
    }

    /**
     * Get constraint for given edge
     *
     * @param source edge source
     * @param target edge target
     */
    private getConstraint(source: string, target: string): EdgeConstraint {
        return this.constraints?.find(
            (c) => (c.source === source && c.target === target) || (c.source === target && c.target === source)
        );
    }

    /**
     * Get style object to determine edge behaviour
     *
     * @param edge edge object to get styles for
     * @param attributes edge attributes
     * @param constraint optional attached constraint, used in edge encoder mode
     */
    private getEdgeStyle(edge: EdgeObject, attributes: SimulationEdge, constraint?: EdgeConstraint): PixiEdgeStyle {
        return {
            accepted: attributes['meta.rendering_properties.accepted'],
            color: attributes['meta.rendering_properties.color'],
            constraint,
            editorMode: this.editorMode,
            forced: attributes['meta.rendering_properties.forced'],
            isEdgeSelected: !!this.selectedEdge,
            points: attributes.points,
            state: edge.state,
            strength: this.getRelativeStrength(attributes),
            theme: this.theme,
            thickness: attributes['meta.rendering_properties.thickness'],
            type: attributes.edge_type,
        };
    }

    /**
     * Get style object to determine node behaviour
     *
     * @param node node object to get styles for
     * @param attributes node attributes
     */
    private getNodeStyle(node: NodeObject, attributes: SimulationNode): PixiNodeStyle {
        const group = getNodeGroup(this.graph, attributes.id, attributes['meta.rendering_properties.latent']);

        return {
            color: attributes['meta.rendering_properties.color'],
            group,
            highlight_color: attributes['meta.rendering_properties.highlight_color'],
            isEdgeSelected: !!this.selectedEdge,
            isSourceOfNewEdge: this.isCreatingEdge && this.mousedownNodeKey === attributes.id,
            label: attributes['meta.rendering_properties.label'] ?? attributes.id,
            label_color: attributes['meta.rendering_properties.label_color'],
            label_size: attributes['meta.rendering_properties.label_size'] ?? this.layout.nodeFontSize,
            size:
                attributes['meta.rendering_properties.size'] ??
                getNodeSize(attributes['meta.rendering_properties.size'] ?? this.layout.nodeSize, group),
            state: node.state,
            theme: this.theme,
        };
    }

    /**
     * Enable hover state for given edge
     *
     * @param id id of edge to hover
     */
    private hoverEdge(id: string): void {
        const edge = this.edgeMap.get(id);
        if (edge.state.hover) {
            return;
        }

        // update style
        edge.state.hover = true;
        this.updateEdgeStyleByKey(id);
        this.requestRender();
    }

    /**
     * Enable hover state for given node
     *
     * @param id id of node to hover
     */
    private hoverNode(id: string): void {
        const node = this.nodeMap.get(id);
        if (node.state.hover) {
            return;
        }

        // update style
        node.state.hover = true;
        this.updateNodeStyleByKey(id);
        this.requestRender();
    }

    /**
     * Move given node to target position
     *
     * @param nodeKey id of node to move
     * @param point target position
     */
    private moveNode(nodeKey: string, point: PIXI.IPointData): void {
        // Update positions - this will trigger re-renders
        this.graph.setNodeAttribute(nodeKey, 'x', point.x);
        this.graph.setNodeAttribute(nodeKey, 'y', point.y);

        this.onMove?.(nodeKey, point.x, point.y);
    }

    /**
     * Move handler - drag behaviour
     *
     * @param event mouse event
     */
    private onDocumentMouseMove(event: MouseEvent): void {
        this.emit('dragStart');

        const eventPosition = new PIXI.Point(event.offsetX, event.offsetY);
        const eventWorldPosition = this.viewport.toWorld(eventPosition);

        // Continue move behaviour based on mode started when we started the drag
        // as controlled by isMovingNode/isCreatingEdge
        // We're not using dragMode here in case it changed mid-drag
        if (this.mousedownNodeKey) {
            if (this.isMovingNode) {
                this.moveNode(this.mousedownNodeKey, eventWorldPosition);
            }
            if (this.isCreatingEdge) {
                const nodeWorldPosition = this.viewport.toWorld(this.nodeMousedownCenterPosition);

                // move the temp edge
                const tempEdge = this.edgeMap.get(TEMP_EDGE_SYMBOL);
                tempEdge.updatePosition(
                    {
                        // use undirected edge / PAG viewer to draw an edge without symbols
                        editorMode: EditorMode.PAG_VIEWER,
                        isEdgeSelected: false,
                        state: tempEdge.state,
                        theme: this.theme,
                        type: EdgeType.UNDIRECTED_EDGE,
                    },
                    nodeWorldPosition,
                    eventWorldPosition,
                    0,
                    0,
                    this.viewport,
                    this.textureCache
                );
                this.requestRender();
            }
        }
    }

    /**
     * On mouse up, stop drag - reset stored mousedown keys and remove moving listener
     */
    private onDocumentMouseUp(): void {
        const initialMousedownNodeKey = this.mousedownNodeKey;
        this.mousedownNodeKey = null;

        if (this.isMovingNode) {
            this.onEndDrag?.();
        }
        if (this.isCreatingEdge) {
            // remove the temp edge
            const tempEdge = this.edgeMap.get(TEMP_EDGE_SYMBOL);
            this.edgeLayer.removeChild(tempEdge.edgeGfx);

            if (initialMousedownNodeKey) {
                this.updateNodeStyleByKey(initialMousedownNodeKey);
            }
        }

        this.viewport.pause = false; // enable viewport dragging
        document.removeEventListener('mousemove', this.onDocumentMouseMoveBound);

        this.emit('dragEnd');
    }

    // Graph change handlers

    private onGraphAttributesUpdated({ attributes }: { attributes: { size?: number; uid?: string } }): void {
        // UID is re-generated on each parser run; beyond first run make sure to keep visuals up-to-date
        if (this.uid) {
            this.updateStyles();
            this.requestRender();
        }
        this.uid = attributes.uid;
    }

    private onGraphNodeAdded({ key, attributes }: { attributes: SimulationNode; key: string }): void {
        this.createNode(key, attributes);

        // If the node is added without a position set, we need to recompute layout or otherwise
        // it won't be drawn on screen
        if (!attributes.x && !attributes.y) {
            this.debouncedUpdateLayout();
        }

        this.updateStyles();
        this.requestRender();
        this.onAddNode?.();
    }

    private onGraphEdgeAdded({
        key,
        source,
        target,
        attributes,
    }: {
        attributes: SimulationEdge;
        key: string;
        source: string;
        target: string;
        undirected: boolean;
    }): void {
        const sourceNodeAttrs = this.graph.getNodeAttributes(source);
        const targetNodeAttrs = this.graph.getNodeAttributes(target);
        this.createEdge(key, attributes, source, target, sourceNodeAttrs, targetNodeAttrs);
        this.updateStrengthRange();
        this.updateStyles();
        this.requestRender();
        this.onAddEdge?.();
    }

    private onGraphEdgeDropped({ key }: { key: string }): void {
        this.dropEdge(key);
        this.updateStrengthRange();
    }

    private onGraphNodeDropped({ key }: { key: string }): void {
        this.dropNode(key);
    }

    private onGraphEdgeAttributesUpdated(): void {
        this.updateStrengthRange();
        this.updateStyles();
        this.requestRender();
    }

    private onGraphNodeAttributesUpdated(): void {
        this.updateStyles();
        this.requestRender();
    }

    /**
     * Apply a given layout to the graph
     *
     * @param layout layout to apply
     */
    private setLayout(
        layout: LayoutMapping<XYPosition>,
        edgePoints?: LayoutMapping<XYPosition[]>,
        resetViewport = true
    ): void {
        assignLayout(this.graph, layout);

        // Apply edge points if provided
        if (edgePoints) {
            Object.entries(edgePoints).forEach(([key, points]) => {
                const [source, target] = key.split('||');
                this.graph.setEdgeAttribute(source, target, 'points', points);
            });
        }

        if (resetViewport) {
            this.resetViewport();
        }

        this.updateStyles();

        // re-render with new layout
        this.requestRender();
    }

    /**
     * Get relative strength definition based on all edge thickness provided
     *
     * @param attributes edge attributes
     */
    private getRelativeStrength(attributes: SimulationEdge): EdgeStrengthDefinition {
        //  only work in DAG mode with thickness defined
        if (this.editorMode !== EditorMode.DEFAULT || !attributes['meta.rendering_properties.thickness']) {
            return null;
        }

        // If there isn't a range to scale with
        if (!this.strengthRange) {
            return null;
        }

        const [sourceMin, sourceMax] = this.strengthRange;

        // Range to interpolate to
        const targetMax = EDGE_STRENGTHS.length - 1;

        const value = attributes['meta.rendering_properties.thickness'];

        const index = Math.round(((value - sourceMin) * targetMax) / (sourceMax - sourceMin));

        return EDGE_STRENGTHS[index];
    }

    /**
     * Disable hover state for given edge
     *
     * @param id id of edge to unhover
     */
    private unhoverEdge(id: string): void {
        const edge = this.edgeMap.get(id);
        if (!edge.state.hover) {
            return;
        }

        // update style
        edge.state.hover = false;
        this.updateEdgeStyleByKey(id);
        this.requestRender();
    }

    /**
     * Disable hover state for given node
     *
     * @param id id of node to unhover
     */
    private unhoverNode(id: string): void {
        const node = this.nodeMap.get(id);
        if (!node.state.hover) {
            return;
        }

        // update style
        node.state.hover = false;
        this.updateNodeStyleByKey(id);
        this.requestRender();
    }

    /**
     * Update edge style
     *
     * @param id id of edge to update
     * @param attributes edge attributes
     * @param source source node ID
     * @param target target node ID
     * @param sourceNodeAttributes source node attributes
     * @param targetNodeAttributes target node attributes
     */
    private updateEdgeStyle(
        id: string,
        attributes: SimulationEdge,
        source: string,
        target: string,
        sourceNodeAttributes: SimulationNode,
        targetNodeAttributes: SimulationNode
    ): void {
        const edge = this.edgeMap.get(id);

        if (edge && this.viewport) {
            const sourceNode = this.nodeMap.get(source);
            const targetNode = this.nodeMap.get(target);

            // Recompute edge position
            const sourceNodePosition = { x: sourceNodeAttributes.x, y: sourceNodeAttributes.y };
            const targetNodePosition = { x: targetNodeAttributes.x, y: targetNodeAttributes.y };
            const edgeStyle = this.getEdgeStyle(edge, attributes, this.getConstraint(source, target));

            edge.updatePosition(
                edgeStyle,
                sourceNodePosition,
                targetNodePosition,
                sourceNode.nodeGfx.width,
                targetNode.nodeGfx.width,
                this.viewport,
                this.textureCache
            );
        }
    }

    /**
     * Update style for given edge
     *
     * @param edgeKey id of edge to update
     */
    private updateEdgeStyleByKey(edgeKey: string): void {
        const edgeAttributes = this.graph.getEdgeAttributes(edgeKey);
        const sourceNodeKey = this.graph.source(edgeKey);
        const targetNodeKey = this.graph.target(edgeKey);
        const sourceNodeAttributes = this.graph.getNodeAttributes(sourceNodeKey);
        const targetNodeAttributes = this.graph.getNodeAttributes(targetNodeKey);
        this.updateEdgeStyle(
            edgeKey,
            edgeAttributes,
            sourceNodeKey,
            targetNodeKey,
            sourceNodeAttributes,
            targetNodeAttributes
        );
    }

    /**
     * Update visibility of graph parts.
     *
     * Applies culling to hide off-screen graphics, updates LOD based on zoom level
     */
    private updateGraphVisibility(): void {
        const cull = new Cull();
        cull.addAll((this.viewport.children as PIXI.Container[]).flatMap((layer) => layer.children));
        cull.cull(this.app.renderer.screen);

        const zoomState = getZoomState(this.viewport.scale.x, this.zoomThresholds);

        this.graph.forEachNode((nodeKey) => {
            const node = this.nodeMap.get(nodeKey);

            if (node) {
                node.updateVisibility(zoomState);
            }
        });

        this.graph.forEachEdge((edgeKey, edgeAttributes) => {
            const edge = this.edgeMap.get(edgeKey);
            if (edge) {
                edge.updateVisibility(zoomState, edgeAttributes.points !== undefined);

                // For edges we also update styles as the edge lengths are dependant on node positions
                // which changes based on the scale
                this.updateEdgeStyleByKey(edgeKey);
            }
        });
    }

    /**
     * Recompute the layout and apply it
     */
    private async updateLayout(): Promise<void> {
        // Cleanup previous layout
        this.onCleanup?.();

        const { layout, edgePoints, onStartDrag, onEndDrag, onCleanup, onMove, onAddNode, onAddEdge } =
            await this.layout.applyLayout(this.graph, (l, e) => this.setLayout(l, e, false));
        this.onAddNode = onAddNode;
        this.onAddEdge = onAddEdge;
        this.onStartDrag = onStartDrag;
        this.onEndDrag = onEndDrag;
        this.onCleanup = onCleanup;
        this.onMove = onMove;

        this.setLayout(layout, edgePoints);
    }

    /**
     * Update style of given node
     *
     * @param id id of node to update
     * @param attributes node attributes
     */
    private updateNodeStyle(id: string, attributes: SimulationNode): void {
        const node = this.nodeMap.get(id);

        if (node) {
            const nodePosition = { x: attributes.x, y: attributes.y };
            node.updatePosition(nodePosition);

            node.updateStyle(this.getNodeStyle(node, attributes), this.textureCache);
        }
    }

    /**
     * Update style for given node
     *
     * @param nodeKey id of node to update
     */
    private updateNodeStyleByKey(nodeKey: string): void {
        const nodeAttributes = this.graph.getNodeAttributes(nodeKey);
        this.updateNodeStyle(nodeKey, nodeAttributes);
    }

    /**
     * Recalculate current strength range based on thickness properties
     */
    private updateStrengthRange(): void {
        const thicknessValues = this.graph
            .mapEdges((nodeKey) => this.graph.getEdgeAttribute(nodeKey, 'meta.rendering_properties.thickness'))
            .filter((x) => x !== undefined);

        if (thicknessValues.length < 2) {
            this.strengthRange = null;
            return;
        }

        const min = Math.min(...thicknessValues);
        const max = Math.max(...thicknessValues);

        this.strengthRange = [min, max];
    }

    /**
     * Update the visuals of each node and edge
     */
    private updateStyles(): void {
        this.graph.forEachNode(this.updateNodeStyle.bind(this));
        this.graph.forEachEdge(this.updateEdgeStyle.bind(this));
    }
}
