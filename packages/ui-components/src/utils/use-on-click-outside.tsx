import { useEffect } from 'react';

function useOnClickOutside(element: any, handler: () => void): void {
    useEffect(() => {
        const listener = (event: MouseEvent): void => {
            // Do nothing if clicking ref's element or descendent elements
            if (!element || element.contains(event.target)) {
                return;
            }
            handler();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [element, handler]);
}

export default useOnClickOutside;
