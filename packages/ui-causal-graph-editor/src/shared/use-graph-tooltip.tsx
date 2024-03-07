import * as React from 'react';

import usePaneVisibility from './use-pane-visibility';
import { GetReferenceClientRect } from 'tippy.js';

export default function useGraphTooltip(pane: React.RefObject<HTMLElement>): {
    setTooltipContent: (content: React.ReactNode) => void;
    tooltipContent: React.ReactNode;
    tooltipRef: React.MutableRefObject<GetReferenceClientRect>;
} {
    const tooltipRef = React.useRef<GetReferenceClientRect>(null);
    const [tooltipContent, setTooltipContent] = React.useState<React.ReactNode>(null);

    // force tooltip to hide when the pane becomes invisible
    const onPaneVisibilityChange = React.useCallback((isVisible: boolean) => {
        if (!isVisible) {
            setTooltipContent(null);
        }
    }, []);

    // reset tooltip when the pane becomes invisible
    React.useEffect(() => {
        const handler = (): void => {
            if (document.visibilityState !== 'visible') {
                setTooltipContent(null);
            }
        };

        document.addEventListener('visibilitychange', handler);

        return () => {
            document.removeEventListener('visibilitychange', handler);
        };
    }, []);

    // Keep track of whether the graph pane is visible
    const { isRectVisible } = usePaneVisibility(pane, onPaneVisibilityChange);

    /**
     * Show a tooltip at the current mouse position
     *
     * Makes sure the tooltip is only shown when the pane is visible
     *
     * @param content the content to show in the tooltip
     */
    function showTooltip(content: React.ReactNode): void {
        // NOTE: This is technically async but will resolve immediately as it's resolved
        // in response to IntersectionObserver callback, which is guaranteed to fire
        // the next render cycle
        isRectVisible(tooltipRef.current()).then((isVisible) => {
            setTooltipContent(isVisible ? content : null);
        });
    }

    return {
        setTooltipContent: showTooltip,
        tooltipContent,
        tooltipRef,
    };
}
