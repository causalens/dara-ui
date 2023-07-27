/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
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
