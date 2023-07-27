/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { SetStateAction, useEffect, useState } from 'react';

import { SimulationGraph } from '../../../types';

interface UseSearchInput {
    graph: SimulationGraph;
    setSelectedNode: (value: SetStateAction<string>) => void;
}

interface UseSearchOutput {
    currentSearchNode: number;
    onNextSearchResult: () => void | Promise<void>;
    onPrevSearchResult: () => void | Promise<void>;
    onSearchBarChange: (value?: string) => void | Promise<void>;
    searchResults: string[];
}

function useSearch({ graph, setSelectedNode }: UseSearchInput): UseSearchOutput {
    const [searchResults, setSearchResults] = useState<string[]>([]);
    const [currentSearchNode, setCurrentSearchNode] = useState(0);

    const [searchValue, setSearchValue] = useState('');

    const updateSearchResults =
        (setActiveNode = true) =>
        (value?: string): void => {
            setSearchValue(value);
            if (!value) {
                setSearchResults([]);
                if (setActiveNode) {
                    setCurrentSearchNode(0);
                    setSelectedNode(null);
                }

                return;
            }

            const searchValueClean = value.trim().toLowerCase();

            const filteredNodes = graph
                .mapNodes((id, data) => {
                    const idIncludesValue = id.toLowerCase().includes(searchValueClean);
                    const hasLabelWhichIncludesValue =
                        data['meta.rendering_properties.label'] &&
                        data['meta.rendering_properties.label'].toLowerCase().includes(searchValueClean);

                    return idIncludesValue || hasLabelWhichIncludesValue ? id : undefined;
                })
                .filter(Boolean);

            setSearchResults(filteredNodes);

            if (setActiveNode) {
                setCurrentSearchNode(0);
                setSelectedNode(filteredNodes.length > 0 ? filteredNodes[0] : null);
            }
        };

    const onSearchBarChange = updateSearchResults();

    function onNextSearchResult(): void {
        const totalNumberOfResults = searchResults.length;
        const newIndex = (currentSearchNode + 1) % totalNumberOfResults;
        setCurrentSearchNode(newIndex);
        setSelectedNode(searchResults[newIndex]);
    }
    function onPrevSearchResult(): void {
        const totalNumberOfResults = searchResults.length;
        let newIndex = (currentSearchNode - 1) % totalNumberOfResults;
        if (newIndex < 0) {
            newIndex += totalNumberOfResults;
        }
        setCurrentSearchNode(newIndex);
        setSelectedNode(searchResults[newIndex]);
    }

    useEffect(() => {
        updateSearchResults(false)(searchValue);
    }, [graph]);

    return {
        currentSearchNode,
        onNextSearchResult,
        onPrevSearchResult,
        onSearchBarChange,
        searchResults,
    };
}

export default useSearch;
