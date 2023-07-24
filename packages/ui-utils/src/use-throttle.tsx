import throttle from 'lodash/throttle';
import { useCallback, useEffect, useRef, useState } from 'react';

interface ThrottleOptions {
    leading?: boolean;
    trailing?: boolean;
}

/**
 * Create a throttled version of the callback passed. A hook is required to persist the state of the throttle between
 * renders
 *
 * @param cb the function to throttle
 * @param delay how long between each throttled event
 * @param options whether to throttle on the leading or trailing edge, see lodash throttle docs for context
 */
export function useThrottle(
    cb: (...args: Array<any>) => any,
    delay: number,
    options?: ThrottleOptions
): (...args: Array<any>) => any {
    const cbRef = useRef(cb);
    useEffect(() => {
        cbRef.current = cb;
    });
    return useCallback(
        throttle((...args: Array<any>) => cbRef.current(...args), delay, options),
        [delay]
    );
}

/**
 * A throttled version of useState that allows for state to only be updated every so often. This is useful when setting
 * state that may trigger network requests. Exposes a throttled and immediate version of the setState function for
 * greater control
 *
 * @param initialValue the initial state value
 * @param delay how long between each throttled update
 * @param options whether to throttle on the leading or trailing edge, see lodash throttle docs for context
 */
export function useThrottledState<T>(
    initialValue: T,
    delay: number,
    options: ThrottleOptions = { leading: false, trailing: true }
): [T, (value: T) => void, (value: T) => void] {
    const [value, setValue] = useState(initialValue);
    const throttledSetValue = useThrottle(setValue, delay, options);
    return [value, throttledSetValue, setValue];
}
