import { useContext } from 'react';

import { Tooltip } from '@darajs/ui-components';
import { Refresh } from '@darajs/ui-icons';

import PointerContext from '@shared/pointer-context';

import { FloatingButton } from '../floating-elements';

interface RecalculateLayoutButtonProps {
    /** Handler for resetting the layout */
    onResetLayout: () => void | Promise<void>;
}

function RecalculateLayoutButton(props: RecalculateLayoutButtonProps): JSX.Element {
    const { disablePointerEvents } = useContext(PointerContext);

    return (
        <Tooltip content="Recalculate Layout" placement="bottom">
            <FloatingButton
                aria-label="Recalculate Layout"
                disableEvents={disablePointerEvents}
                fixedSize
                onClick={props.onResetLayout}
            >
                <Refresh />
            </FloatingButton>
        </Tooltip>
    );
}

export default RecalculateLayoutButton;
