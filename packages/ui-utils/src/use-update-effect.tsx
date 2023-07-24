import { useEffect, useRef } from 'react';

/**
 * Like React useEffect except ignores the first invocation.
 *
 * @param effect Imperative function that can return a cleanup function
 * @param deps If present, effect will only activate if the values in the list change.
 */
const useUpdateEffect: typeof useEffect = (effect, deps) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        return effect();
    }, deps);
};

export default useUpdateEffect;
