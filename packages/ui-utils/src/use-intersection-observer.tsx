import { MutableRefObject, useEffect, useState } from 'react';

/**
 * The useIntersectionObserver hook allows a component to track whether an element is intersecting with an ancestor
 * element or with a top-level document's viewport.
 *
 * @param ref the ref to the element that is to be observed
 * @param rootMargin the amount of the element that is to be intersecting for the observer's callback to be executed.
 * @param threshold Either a single number or an array of numbers which indicate at what percentage of the target's
 * visibility the observer's callback should be executed.
 * @returns boolean indicating whether element is intersecting or not
 */

function useIntersectionObserver<T extends Element>(
    ref: MutableRefObject<T>,
    rootMargin = '0px',
    threshold = 1.0
): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
            rootMargin,
            threshold,
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) observer.unobserve(ref.current);
            else observer.disconnect();
        };
    }, []);
    return isIntersecting;
}

export default useIntersectionObserver;
