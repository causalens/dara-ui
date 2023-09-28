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
import { causalGraphParser } from './parsers';

export interface UseCausalGraphEditorApi {
    api: GraphApi;
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
    availableInputs?: string[],
    newNodesRequirePosition?: boolean
): UseCausalGraphEditorApi {
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
    }, [graphData]);

    return {
        api,
        state,
    };
}
