/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useCallback, useEffect, useRef, useState } from 'react';

import { useDeepCompare } from '@darajs/ui-utils';

interface LoadReturn<T> {
    data: Array<T>;
    totalCount: number;
}

export interface ItemsRenderedPayload {
    overscanStartIndex: number;
    overscanStopIndex: number;
}

export interface InfiniteLoader<T> {
    /** A function to get the actual value of an item, based on it's absolute index in the list */
    getItem: (index: number) => T;
    /** The total count of items in the list */
    itemCount: number;
    /** A handler for the onItemsRendered function exposed by the react-window components */
    onItemsRendered: (payload: ItemsRenderedPayload) => Promise<void>;
    /**
     * A function to force a refresh of the data, will trigger a refetch of the current window and discard anything
     * outside that window
     */
    refresh: () => void;
}

/**
 * This is a helper hook that plugs into the react-window components and allows them to load data infinitely by simply
 * passing a load data function to the constructor and passing the returned props into the virtualized list components.
 * The key difference between this and the infinite loader library is that this hook allows for polling, simply by
 * calling the refresh function that it exposes in a useEffect hook.
 *
 * @param onLoadData a function that should load the data between startIndex and stopIndex
 */
function useInfiniteLoader<T>(
    onLoadData: (startIndex: number, stopIndex: number) => Promise<LoadReturn<T>>,
    onError?: (err: Error) => void | Promise<void>,
    batchSize = 50
): InfiniteLoader<T> {
    // Use a ref on the onLoadData function to get the updated version into the onItemsRendered function as only the
    // first instance passed is ever called by react-window
    const onLoadRef = useRef(onLoadData);
    const [internalData, setInternalData] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [currentStartIdx, setStartIdx] = useState(0);
    const [currentStopIdx, setStopIdx] = useState(0);
    const [currentRange, setCurrentRange] = useState<ItemsRenderedPayload>({
        overscanStartIndex: 0,
        overscanStopIndex: 50,
    });

    const getItem = useCallback((index: number) => {
        const adjustedIndex = index - currentStartIdx;
        if (adjustedIndex < 0 || adjustedIndex > internalData.length) {
            return;
        }
        return internalData[adjustedIndex];
    }, useDeepCompare([currentStartIdx, internalData]));

    const onItemsRendered = useCallback(
        async (
            { overscanStartIndex, overscanStopIndex }: ItemsRenderedPayload,
            forceRefresh?: boolean
        ): Promise<void> => {
            try {
                const isFirstItemLoaded = overscanStartIndex >= currentStartIdx && overscanStartIndex <= currentStopIdx;
                const isLastItemLoaded = overscanStopIndex >= currentStartIdx && overscanStopIndex <= currentStopIdx;
                setCurrentRange({ overscanStartIndex, overscanStopIndex });

                // Nothing to do if everything is loaded and it's not a forced refresh
                if (isFirstItemLoaded && isLastItemLoaded && !forceRefresh) {
                    return;
                }

                // If both are loaded then forceRefresh is true or both are not loaded and we're starting from nothing. In
                // either case we need to calculate the window to fetch from the backend.
                if (isFirstItemLoaded === isLastItemLoaded) {
                    const mid = Math.floor((overscanStopIndex - overscanStartIndex) / 2 + overscanStartIndex);
                    const start = Math.max(mid - batchSize / 2, 0);
                    const end = mid + batchSize / 2;
                    setStartIdx(start);
                    setStopIdx(end);
                    const { data, totalCount } = await onLoadRef.current(start, end);
                    setInternalData(data);
                    setItemCount(totalCount);
                    return;
                }

                // This branch covers scrolling up from the bottom of the list and loading as it goes
                if (!isFirstItemLoaded) {
                    const start = Math.max(currentStartIdx - batchSize, 0);
                    const res = onLoadRef.current(start, currentStartIdx);
                    setStartIdx(start);
                    const { data, totalCount } = await res;
                    setInternalData((current) => [...data, ...current]);
                    setItemCount(totalCount);
                    return;
                }

                // This branch covers scrolling down from the top and loading as it goes
                const end = currentStopIdx + batchSize;
                const res = onLoadRef.current(currentStopIdx, end);
                setStopIdx(end);
                const { data, totalCount } = await res;
                setInternalData((current) => [...current, ...data]);
                setItemCount(totalCount);
            } catch (err) {
                onError?.(err);
            }
        },
        [currentStartIdx, currentStopIdx]
    );

    useEffect(() => {
        onLoadRef.current = onLoadData;
        onItemsRendered(currentRange, true);
    }, [onLoadData]);

    const refresh = useCallback(() => {
        onItemsRendered(currentRange, true);
    }, useDeepCompare([currentRange]));
    return {
        getItem,
        itemCount,
        onItemsRendered,
        refresh,
    };
}

export default useInfiniteLoader;
