/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { EdgeConstraint, EditorMode, SimulationEdge, SimulationGraph, ZoomThresholds } from '@types';
import * as PIXI from 'pixi.js';
import * as React from 'react';

import { useTheme } from '@darajs/styled-components';

import { GraphLayout } from '../graph-layout';
import { DragMode } from '../use-drag-mode';
import { PixiEdgeStyle } from './edge';
import { ENGINE_EVENTS, Engine, EngineEvents } from './engine';

interface UseRenderEngineApi {
    /**
     * Get current center position of the viewport
     */
    getCenterPosition: () => PIXI.IPointData;
    /**
     * Should be called whenever an edge selection should change
     *
     * @param path selected edge
     */
    onEdgeSelected: (path: [string, string]) => void;
    /**
     * Should be called whenever node selection should change
     *
     * @param node selected node
     */
    onNodeSelected: (node: string) => void;
    /**
     * Should be called wheneve search results change
     *
     * @param nodes found nodes
     */
    onSearchResults: (nodes: string[]) => void;
    /**
     * Should be called whenever drag mode changes
     *
     * @param dragMode new drag mode
     */
    onSetDragMode: (dragMode: DragMode | null) => void;
    /**
     * Should be called whenever available constraints change
     *
     * @param constraints new set of constraints
     */
    onUpdateConstraints: (constraints: EdgeConstraint[]) => void;
    /**
     * Recompute the layout
     */
    resetLayout: () => void;
    /**
     * Reset the viewport - reset zoom and center
     */
    resetViewport: () => void;
    /**
     * Register a handler for a given engine event.
     *
     * @param eventName name of event to respond to
     * @param handler callback to execute whenever the event is fired
     */
    useEngineEvent: <T extends keyof EngineEvents>(eventName: T, handler: EngineEvents[T]) => void;
}

/**
 * Use a PIXI graph rendering engine.
 *
 * @param parentRef ref to container where canvas will be injected
 * @param graph graph instance
 * @param layout graph layout
 * @param editorMode current editor mode
 * @param constraints initial edge constraints
 * @param zoomThresholds zoom thresholds
 */
export function useRenderEngine(
    parentRef: React.MutableRefObject<HTMLElement>,
    graph: SimulationGraph,
    layout: GraphLayout,
    editable: boolean,
    editorMode: EditorMode,
    constraints?: EdgeConstraint[],
    processEdgeStyle?: (edge: PixiEdgeStyle, attributes: SimulationEdge) => PixiEdgeStyle,
    zoomThresholds?: ZoomThresholds
): UseRenderEngineApi {
    const theme = useTheme();
    const engine = React.useRef<Engine>(null);
    const listeners = React.useRef<Partial<EngineEvents>>({});

    if (!engine.current) {
        engine.current = new Engine(
            graph,
            layout,
            editable,
            editorMode,
            theme,
            constraints,
            zoomThresholds,
            processEdgeStyle
        );
    }

    // Start engine after first render, stop it on destroy
    React.useEffect(() => {
        engine.current.start(parentRef.current).then(() => {
            // Attach listeners for each event type
            ENGINE_EVENTS.forEach((eventName) => {
                engine.current.addListener(eventName, (...args) => {
                    listeners.current[eventName]?.apply(null, args);
                });
            });
        });

        return () => {
            engine.current.destroy();
        };
    }, []);

    // update engine theme
    React.useEffect(() => {
        if (engine.current.initialized) {
            engine.current.setTheme(theme);
        }
    }, [theme]);

    /**
     * Updates the listener reference in a ref. Engine event listeners are registered just once so
     * we register a dynamic listener which calls the listener registered in the ref.
     */
    const useEngineEvent = React.useCallback(<T extends keyof EngineEvents>(eventName: T, handler: EngineEvents[T]) => {
        listeners.current[eventName] = handler;
    }, []);

    return {
        getCenterPosition: (): PIXI.IPointData => {
            return engine.current.getCenterPosition();
        },
        onEdgeSelected: (path: [string, string]) => {
            if (engine.current.initialized) {
                engine.current.selectEdge(path);
            }
        },
        onNodeSelected: (node: string) => {
            if (engine.current.initialized) {
                engine.current.selectNode(node);
            }
        },
        onSearchResults: (nodes: string[]) => {
            if (engine.current.initialized) {
                engine.current.searchNodes(nodes);
            }
        },
        onSetDragMode: (dragMode: DragMode | null) => {
            engine.current.setDragMode(dragMode);
        },
        onUpdateConstraints: (newConstraints: EdgeConstraint[]) => {
            if (engine.current.initialized) {
                engine.current.updateConstraints(newConstraints);
            }
        },
        resetLayout: () => {
            if (engine.current.initialized) {
                engine.current.debouncedUpdateLayout();
            }
        },
        resetViewport: () => {
            if (engine.current.initialized) {
                engine.current.resetViewport();
            }
        },
        useEngineEvent,
    };
}
