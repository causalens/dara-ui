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

type UseIterateNodes = {
    nextNode: () => void;
    prevNode: () => void;
};

/**
 * Given a graph and a currently selected node,
 * provide next/previous functions for selecting the next/previous node.
 * @param selectedNode id of the currently selected node
 * @param setSelectedNode Method for setting the selected node state variable
 * @param state graph viewer state
 */
const useIterateNodes = (
    selectedNode: string,
    setSelectedNode: React.Dispatch<React.SetStateAction<string>>,
    state: GraphState
): UseIterateNodes => {
    const nextNode = (): void => {
        const nodes = state.graph.nodes();

        const selectedNodeIndex = nodes.findIndex((n) => n === selectedNode);
        const newNodeIndex = (selectedNodeIndex + 1) % nodes.length;

        setSelectedNode(nodes[newNodeIndex]);
    };

    const prevNode = (): void => {
        const nodes = state.graph.nodes();

        const selectedNodeIndex = nodes.findIndex((n) => n === selectedNode);

        let newNodeIndex = (selectedNodeIndex - 1) % nodes.length;

        if (newNodeIndex < 0) {
            newNodeIndex += nodes.length;
        }

        setSelectedNode(nodes[newNodeIndex]);
    };

    return {
        nextNode,
        prevNode,
    };
};

export default useIterateNodes;
