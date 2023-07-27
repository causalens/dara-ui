/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import React from 'react';

import { GraphState } from '../../types';

type UseIterateEdges = {
    nextEdge: () => void;
    prevEdge: () => void;
};

/**
 * Given a graph and a currently selected edge,
 * provide next/previous functions for selecting the next/previous edge.
 * @param selectedEdge Tuple indicating the currently selected edge
 * @param setSelectedEdge Method for setting the selected edge state variable
 * @param state graph viewer state
 */
const useIterateEdges = (
    selectedEdge: [string, string],
    setSelectedEdge: React.Dispatch<React.SetStateAction<[string, string]>>,
    state: GraphState
): UseIterateEdges => {
    const nextEdge = (): void => {
        const edges = Array.from(state.graph.edgeEntries());

        const [source, target] = selectedEdge;

        const selectedEdgeIndex = edges.findIndex((entry) => entry.source === source && entry.target === target);

        const newEdgeIndex = (selectedEdgeIndex + 1) % edges.length;
        const newEdgeEntry = edges[newEdgeIndex];

        return setSelectedEdge([newEdgeEntry.source, newEdgeEntry.target]);
    };

    const prevEdge = (): void => {
        const edges = Array.from(state.graph.edgeEntries());

        const [source, target] = selectedEdge;

        const selectedEdgeIndex = edges.findIndex((entry) => entry.source === source && entry.target === target);

        let newEdgeIndex = (selectedEdgeIndex - 1) % edges.length;
        if (newEdgeIndex < 0) {
            newEdgeIndex += edges.length;
        }

        const newEdgeEntry = edges[newEdgeIndex];

        return setSelectedEdge([newEdgeEntry.source, newEdgeEntry.target]);
    };

    return {
        nextEdge,
        prevEdge,
    };
};

export default useIterateEdges;
