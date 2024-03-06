import { mix } from 'polished';
import * as React from 'react';

import styled from '@darajs/styled-components';
import { Button, Tooltip } from '@darajs/ui-components';
import { Xmark } from '@darajs/ui-icons';

import PointerContext from '@shared/pointer-context';

interface ZoomPromptProps {
    hasFocus: boolean;
    onClose: () => void;
    onDismiss: () => void;
}

const PromptWrapper = styled.div`
    padding: 0 0.5rem;
    background-color: ${({ theme }) => mix(0.1, theme.colors.grey2, theme.colors.blue1)};
    border: 1px solid ${({ theme }) => theme.colors.grey2};
    color: ${({ theme }) => theme.colors.grey4};
    flex-shrink: 1;
    min-width: 0;

    border-radius: 4px;

    font-size: 0.875rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

const DismissText = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 5ch;
`;

const DismissButton = styled(Button)`
    background-color: transparent;
    font-size: 0.875rem;
    flex-shrink: 0;
    padding: 0.25rem;

    &:hover:not(:disabled) {
        background-color: transparent;
        text-decoration: underline;
    }
`;

const CloseButton = styled(Button)`
    padding: 0.25rem;
    height: auto;
`;

const blurredText = 'To enable zooming with scroll, click the viewer area' as const;
const focusedText = 'To disable zooming on scroll, click out of the viewer area' as const;

export default function ZoomPrompt(props: ZoomPromptProps): React.ReactElement {
    const { disablePointerEvents, onPanelEnter, onPanelExit } = React.useContext(PointerContext);

    const [showTooltip, setShowTooltip] = React.useState(false);

    const textRef = React.useRef<HTMLSpanElement>(null);
    React.useEffect(() => {
        // use observer to detect text overflow
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                // check if text is overflowing
                const isOverflowing = entry.target.scrollWidth > entry.target.clientWidth;
                setShowTooltip(isOverflowing);
            }
        });

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [textRef]);

    const style: React.CSSProperties = {
        pointerEvents: disablePointerEvents ? 'none' : 'all',
    };

    const textContent = props.hasFocus ? focusedText : blurredText;

    return (
        <PromptWrapper onMouseEnter={onPanelEnter} onMouseLeave={onPanelExit} style={style}>
            <Tooltip content={textContent} disabled={!showTooltip}>
                <DismissText ref={textRef}>{textContent}</DismissText>
            </Tooltip>
            <DismissButton onClick={props.onDismiss} styling="ghost">
                Don&apos;t show again
            </DismissButton>
            <CloseButton onClick={props.onClose} styling="ghost">
                <Xmark size="lg" />
            </CloseButton>
        </PromptWrapper>
    );
}
