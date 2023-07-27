/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import isEqual from 'lodash/isEqual';
import { useRef } from 'react';

/**
 * A helper hook that allows for objects to be deeply compared rather than being compared by reference.
 *
 * An example usage with useEffect, where deepObject is a complex object, would be:
 *
 * useEffect(() => {
 *     doSomethingHeavy(deepObject)
 * }, useDeepCompare([deepObject]))
 *
 * @param value - an array of values to check the equality of
 */
export default function useDeepCompare<T>(value: T): T {
    const ref = useRef<T>();

    if (!isEqual(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}
