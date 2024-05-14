/**
 * Copyright 2023 Impulse Innovations Limited
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useContext } from 'react';

import { Tooltip } from '@darajs/ui-components';
import { UpRightAndDownLeftFromCenter } from '@darajs/ui-icons';

import PointerContext from '../../pointer-context';
import { FloatingButton } from '../floating-elements';

interface ExpandGroupButtonProps {
    /** Handler for resetting the zoom */
    onExpandAll: () => void | Promise<void>;
}

function ExpandGroupButton(props: ExpandGroupButtonProps): JSX.Element {
    const { disablePointerEvents } = useContext(PointerContext);

    return (
        <Tooltip content="Expand All" placement="bottom">
            <FloatingButton
                aria-label="Expand All"
                disableEvents={disablePointerEvents}
                fixedSize
                onClick={props.onExpandAll}
                style={{ padding: '0 0.75rem' }}
            >
                <UpRightAndDownLeftFromCenter />
            </FloatingButton>
        </Tooltip>
    );
}

export default ExpandGroupButton;
