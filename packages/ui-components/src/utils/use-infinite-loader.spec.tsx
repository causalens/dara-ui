/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { act, renderHook, waitFor } from '@testing-library/react';
import times from 'lodash/times';

import useInfiniteLoader from './use-infinite-loader';

const data = times(100, (num: number) => ({
    id: `id_${num}`,
}));

const onLoadData = jest.fn(async (startIndex: number, stopIndex: number) => {
    return Promise.resolve({ data: data.slice(startIndex, stopIndex), totalCount: data.length });
});

describe('useInfiniteLoader', () => {
    it('should construct correctly and return a working interface', async () => {
        const { result } = renderHook(() => useInfiniteLoader(onLoadData));

        await waitFor(() => {
            expect(result.current.getItem(0)).toEqual({ id: 'id_0' });
            expect(result.current.getItem(9)).toEqual({ id: 'id_9' });
            expect(result.current.itemCount).toBe(100);
            expect(result.current.onItemsRendered).toBeInstanceOf(Function);
            expect(result.current.refresh).toBeInstanceOf(Function);
        });
    });

    it('should load more data and append to the end of the internal data store when neccesary', async () => {
        const { result } = renderHook(() => useInfiniteLoader(onLoadData));

        await waitFor(() => {
            expect(result.current.getItem(55)).toBeUndefined();
        });
        onLoadData.mockClear();

        act(() => {
            // Simulate scrolling down past the end of the currently loaded data
            result.current.onItemsRendered({ overscanStartIndex: 20, overscanStopIndex: 60 });
        });

        await waitFor(() => {
            expect(onLoadData).toHaveBeenCalledTimes(1);
            expect(onLoadData).toHaveBeenCalledWith(50, 100);
            expect(result.current.getItem(0)).toEqual({ id: 'id_0' });
            expect(result.current.getItem(55)).toEqual({ id: 'id_55' });
        });
    });

    it('should load more data and add to the start of the internal data store when neccesary', async () => {
        const { result } = renderHook(() => useInfiniteLoader(onLoadData));

        // This block acts to scroll down to the bottom of the page and then drop most of the loaded data using refresh
        act(() => {
            result.current.onItemsRendered({ overscanStartIndex: 80, overscanStopIndex: 100 });
        });
        await waitFor(() => {
            expect(result.current.getItem(80)).toEqual({ id: 'id_80' });
        });
        act(() => {
            result.current.refresh();
        });
        // Verify this has worked
        await waitFor(() => {
            expect(result.current.getItem(15)).toBeUndefined();
        });

        onLoadData.mockClear();

        act(() => {
            // Simulate scrolling up past the start of the currently loaded data
            result.current.onItemsRendered({ overscanStartIndex: 60, overscanStopIndex: 90 });
        });

        await waitFor(() => {
            expect(onLoadData).toHaveBeenCalledTimes(1);
        });

        expect(onLoadData).toHaveBeenCalledWith(15, 65); // These number are due to the way it calculates overscan
        expect(result.current.getItem(15)).toEqual({ id: 'id_15' });
    });

    it('should load more data and reset internal data store when jumping through the data', async () => {
        const { result } = renderHook(() => useInfiniteLoader(onLoadData));

        await waitFor(() => {
            expect(result.current.getItem(90)).toBeUndefined();
        });
        onLoadData.mockClear();

        act(() => {
            // Simulate jumping to the end of the data
            result.current.onItemsRendered({ overscanStartIndex: 80, overscanStopIndex: 100 });
        });

        await waitFor(() => {
            expect(onLoadData).toHaveBeenCalledTimes(1);
            expect(onLoadData).toHaveBeenCalledWith(65, 115); // These number are due to the way it calculates overscan
            expect(result.current.getItem(0)).toBeUndefined();
            expect(result.current.getItem(90)).toEqual({ id: 'id_90' });
        });
    });

    it('calling refresh should reset internal data and create a new window at the current scroll location', async () => {
        const { result } = renderHook(() => useInfiniteLoader(onLoadData));

        // This block acts to scroll to the end of the data window and then back to the middle so all the data is loaded
        act(() => {
            result.current.onItemsRendered({ overscanStartIndex: 40, overscanStopIndex: 100 });
            result.current.onItemsRendered({ overscanStartIndex: 40, overscanStopIndex: 60 });
        });

        // Verify this has worked
        await waitFor(() => {
            expect(result.current.getItem(15)).toEqual({ id: 'id_15' });
            expect(result.current.getItem(50)).toEqual({ id: 'id_50' });
            expect(result.current.getItem(90)).toEqual({ id: 'id_90' });
        });
        onLoadData.mockClear();

        act(() => {
            // Simulate refreshing the data from the backend, used when polling
            result.current.refresh();
        });

        await waitFor(() => {
            expect(onLoadData).toHaveBeenCalledTimes(1);
            expect(onLoadData).toHaveBeenCalledWith(25, 75); // These number are due to the way it calculates overscan
            expect(result.current.getItem(15)).toBeUndefined();
            expect(result.current.getItem(50)).toEqual({ id: 'id_50' });
            expect(result.current.getItem(90)).toBeUndefined();
        });
    });
});
