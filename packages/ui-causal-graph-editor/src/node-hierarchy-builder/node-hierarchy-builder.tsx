/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import * as React from 'react';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import shortid from 'shortid';
import { useImmer } from 'use-immer';

import styled from '@darajs/styled-components';
import { Input } from '@darajs/ui-components';
import { useUpdateEffect } from '@darajs/ui-utils';

import Layer from './layer';
import {
    DragItem,
    LayerItem,
    NewLayerPosition,
    Node,
    isInView,
    matchesQuery,
    parseLayerItems,
    parseNodes,
} from './shared';

const BuilderBox = styled.div`
    overflow: hidden;

    width: 100%;
    height: 100%;

    border: 1px solid ${(props) => props.theme.colors.grey2};
    border-radius: 4px;
`;

const BuilderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const NodesWrapper = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    height: 100%;
    padding-top: 12px;

    background-color: ${(props) => props.theme.colors.background};

    /* Draw a background like in the graph editor */
    background-image: radial-gradient(circle, ${(props) => props.theme.colors.grey2} 1px, transparent 1px);
    background-size: 20px 20px;
`;

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.colors.blue1};
    border-bottom: ${(props) => `1px solid ${props.theme.colors.grey3}`};
`;

export interface NodeHierarchyBuilderProps<T> {
    /** Standard react className property */
    className?: string;
    /** Optional node text size in pixels */
    nodeFontSize?: number;
    /** Optional node size in pixels */
    nodeSize?: number;
    /** Nodes input list */
    nodes: Array<Array<T>>;
    /** Optional update handler which is called on every update */
    onUpdate?: (nodes: Array<T[]>) => void | Promise<void>;
    /** Standard styling prop */
    style?: React.CSSProperties;
    /** Don't allow edits to be made */
    viewOnly?: boolean;
    /** Optional whether to wrap text within nodes */
    wrapNodeText?: boolean;
}

/**
 * The NodeHierarchyBuilder component visually represents node hierarchy in layers, allowing the user
 * to re-arrange the nodes inside layers, move them between layers and add/delete new layers.
 */
function NodeHierarchyBuilder<T extends string | Node>(props: NodeHierarchyBuilderProps<T>): JSX.Element {
    const [hierarchy, setHierarchy] = useImmer<LayerItem[]>(parseNodes(props.nodes));
    const returnStrings = useMemo(() => props.nodes.every((l) => l.every((n) => typeof n === 'string')), [props.nodes]);

    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSetSearchQuery = useMemo(() => debounce(setSearchQuery, 500), []);

    const hierarchyData: LayerItem[] = useMemo(() => {
        const query = searchQuery.toLowerCase();

        return hierarchy.map((layer) => {
            return {
                id: layer.id,
                label: layer.label,
                nodes: layer.nodes.map((node) => {
                    return {
                        ...node,
                        selected:
                            matchesQuery(node.name, query) ||
                            (node.meta?.label && matchesQuery(node.meta.label, query)),
                    };
                }),
            };
        });
    }, [searchQuery, hierarchy]);

    const layersWrapperRef = useRef<HTMLDivElement | null>(null);
    const layersRef = useRef<Array<HTMLDivElement>>([]);

    useEffect(() => {
        // Reset internal state if the outside prop changes - diverges from the internally stored hierarchy
        if (!isEqual(props.nodes, parseLayerItems(hierarchy, returnStrings as any))) {
            setHierarchy(parseNodes(props.nodes));
        }
    }, [props.nodes, returnStrings]);

    useUpdateEffect(() => {
        props.onUpdate?.(parseLayerItems(hierarchy, returnStrings as any) as T[][]);
    }, [hierarchy, returnStrings]);

    useEffect(() => {
        debouncedSetSearchQuery(searchInput);
    }, [searchInput]);

    useEffect(() => {
        if (layersRef.current && layersWrapperRef.current && searchQuery !== '') {
            let anySelectedVisible = false;
            let firstSelectedLayer = null;

            for (const [idx, layer] of hierarchyData.entries()) {
                // Layer with some selected nodes
                if (layer.nodes.some((node) => node.selected)) {
                    if (!firstSelectedLayer) {
                        firstSelectedLayer = idx;
                    }

                    // Check if it's visible
                    if (isInView(layersRef.current[idx], layersWrapperRef.current)) {
                        // If we found one we don't need to do anything else
                        anySelectedVisible = true;
                        break;
                    }
                }
            }

            // None of the layers containing selected nodes are visible, let's scroll to the first one if possible
            if (!anySelectedVisible && firstSelectedLayer) {
                layersRef.current[firstSelectedLayer].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [searchQuery]);

    /**
     * Add the layer to the hierarchy at the specified position in reference to the target layer
     *
     * @param reference reference layer
     * @param position position - whether to add above or below the reference layer
     */
    const onAddLayer = (reference: string, position: NewLayerPosition): void => {
        if (props.viewOnly) return;

        setHierarchy((draft) => {
            const index = draft.findIndex((layer) => layer.id === reference);
            const targetIndex = position === NewLayerPosition.TOP ? index : index + 1;
            draft.splice(targetIndex, 0, { id: shortid.generate(), nodes: [] });
        });
    };

    const onDeleteLayer = (layerIndex: number): void => {
        if (props.viewOnly) return;

        // Disallow removing last remaining layer
        if (hierarchy.length === 1) return;

        // In case of last layer move to previous layer, otherwise move nodes down
        const moveToIndex = layerIndex === hierarchy.length - 1 ? layerIndex - 1 : layerIndex;
        setHierarchy((draft) => {
            const layerToMove = draft[layerIndex];
            draft.splice(layerIndex, 1);
            draft[moveToIndex].nodes.push(...layerToMove.nodes);
        });
    };

    const onUpdateLabel = (layerId: string, label: string): void => {
        if (props.viewOnly) return;

        setHierarchy((draft) => {
            const layerIndex = draft.findIndex((l) => l.id === layerId);

            if (layerIndex > -1) {
                draft[layerIndex].label = label;
            }
        });
    };

    const onDropNode = (nodeItem: DragItem, newLayerIndex: number): void => {
        const currentLayerIndex = hierarchy.findIndex((layer) => layer.nodes.find((node) => node.id === nodeItem.id));

        setHierarchy((draft) => {
            draft[currentLayerIndex].nodes.splice(nodeItem.index, 1);
            draft[newLayerIndex].nodes.push({
                id: nodeItem.id,
                meta: nodeItem.meta,
                name: nodeItem.name,
                selected: false,
            });
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <BuilderBox className={props.className} style={props.style}>
                <BuilderWrapper>
                    <SearchWrapper>
                        <Input
                            onChange={(val) => setSearchInput(val)}
                            placeholder="Search for nodes..."
                            value={searchInput}
                        />
                    </SearchWrapper>
                    <NodesWrapper ref={layersWrapperRef}>
                        {hierarchyData.map((layer, idx) => (
                            <Fragment key={layer.id}>
                                <Layer
                                    id={layer.id}
                                    isFirst={idx === 0}
                                    isOnly={hierarchy.length === 1}
                                    label={layer.label}
                                    nodeFontSize={props.nodeFontSize}
                                    nodeSize={props.nodeSize}
                                    nodes={layer.nodes}
                                    number={idx + 1}
                                    onAddLayer={onAddLayer}
                                    onDeleteLayer={() => onDeleteLayer(idx)}
                                    onDrop={(item) => onDropNode(item, idx)}
                                    onUpdateLabel={onUpdateLabel}
                                    // eslint-disable-next-line no-return-assign
                                    ref={(el) => (layersRef.current[idx] = el)}
                                    viewOnly={props.viewOnly}
                                    wrapNodeText={props.wrapNodeText}
                                />
                            </Fragment>
                        ))}
                    </NodesWrapper>
                </BuilderWrapper>
            </BuilderBox>
        </DndProvider>
    );
}

export default NodeHierarchyBuilder;
