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
import isEqual from 'lodash/isEqual';
import { useEffect, useMemo, useReducer, useRef } from 'react';

import { CausalGraph, EditorMode, GraphState } from '../types';
import { GraphActionCreators, GraphActionType, GraphReducer } from './causal-graph-store';
import { GraphLayout } from './graph-layout';
import { causalGraphParser } from './parsers';
import { updateNodesForTimeSeries } from './utils';

export interface UseCausalGraphEditorApi {
    api: GraphApi;
    layout: GraphLayout;
    state: GraphState;
}

type ActionName = keyof typeof GraphActionCreators;
const actionNames = Object.keys(GraphActionCreators) as ActionName[];

/**
 * Graph API object containing all available methods to modify the graph
 */
export type GraphApi = {
    // eslint-disable-next-line prettier/prettier
    [k in ActionName]: (...args: Parameters<(typeof GraphActionCreators)[k]>) => void;
};

/**
 * A helper hook to inject causal graph editor API for given initial graphdata
 */
export default function useCausalGraphEditor(
    graphData: CausalGraph,
    editorMode: EditorMode,
    graphLayout: GraphLayout,
    availableInputs?: string[]
): UseCausalGraphEditorApi {
    const newNodesRequirePosition = graphLayout.requiresPosition;

    const [state, dispatch] = useReducer(
        GraphReducer,
        {
            editorMode,
            newNodesRequirePosition,
        },
        (initState: GraphState) => {
            return {
                ...initState,
                graph: causalGraphParser(graphData, availableInputs),
            };
        }
    );

    // bind each action creator to dispatch
    const api = useMemo(() => {
        return actionNames.reduce<GraphApi>((acc, actionName) => {
            const actionCreator = GraphActionCreators[actionName];
            // eslint-disable-next-line prefer-spread
            acc[actionName] = (...args: Parameters<typeof actionCreator>) => dispatch(actionCreator.apply(null, args));
            return acc;
        }, {} as GraphApi);
    }, [dispatch]);

    const isTimeSeriesCausalGraph = useMemo(() => {
        const nodeClass = state.graph.getNodeAttribute(state.graph.nodes()[0], 'extras')?.node_class;
        return nodeClass === 'TimeSeriesNode';
    }, [state.graph]);

    const layout = useMemo(() => {
        const newLayout = graphLayout;

        if (
            isTimeSeriesCausalGraph &&
            'tiers' in newLayout &&
            'orientation' in newLayout &&
            newLayout.tiers === undefined
        ) {
            updateNodesForTimeSeries(state.graph, api);
            newLayout.tiers = { group: 'extras.time_series_variable', order_nodes_by: 'time_lag' };
        }
        return newLayout;
    }, [isTimeSeriesCausalGraph, api, graphLayout, state.graph]);

    // Init graph data, update when outside graph nodes/edges changes
    const lastParentData = useRef(graphData); // keep track of last parent data to skip unnecessary updates
    useEffect(() => {
        if (
            !isEqual(lastParentData.current.nodes, graphData.nodes) ||
            !isEqual(lastParentData.current.edges, graphData.edges)
        ) {
            dispatch({
                graph: causalGraphParser(graphData, availableInputs, state.graph),
                type: GraphActionType.INIT_GRAPH,
            });
        }

        lastParentData.current = graphData;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        api,
        layout,
        state,
    };
}
