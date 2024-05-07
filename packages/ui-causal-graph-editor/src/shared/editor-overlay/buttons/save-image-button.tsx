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

import { useTheme } from '@darajs/styled-components';
import { Tooltip } from '@darajs/ui-components';
import { Image } from '@darajs/ui-icons';

import PointerContext from '../../pointer-context';
import { FloatingButton } from '../floating-elements';

interface SaveImageButtonProps {
    /** Handler for saving as image */
    onSave: () => void | Promise<void>;
}

function SaveImageButton(props: SaveImageButtonProps): JSX.Element {
    const { disablePointerEvents } = useContext(PointerContext);

    return (
        <Tooltip content="Save as Image" placement="bottom">
            <FloatingButton
                aria-label="Save as Image"
                disableEvents={disablePointerEvents}
                fixedSize
                onClick={props.onSave}
                style={{ padding: '0 0.75rem' }}
            >
                <Image />
            </FloatingButton>
        </Tooltip>
    );
}

export default SaveImageButton;
