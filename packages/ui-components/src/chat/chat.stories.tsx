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
import { Meta } from '@storybook/react';
import * as React from 'react';

import { default as ChatComponent } from './chat';

export default {
    component: ChatComponent,
    title: 'UI Components/Chat',
} as Meta;

const messages = [
    {
        id: '1',
        message:
            'For uploading templates, we would need to provide a user the interface to select associated folders and files along with the dbook they wish to save to the registry.',
        timestamp: '12:00',
    },
    {
        id: '2',
        message:
            'Do we want to consider some of the management of metacell / template registries as a UI/UX flow occurring outside of Studio itself? i.e. it is a platform level user journey?',
        timestamp: '12:01',
    },
    {
        id: '3',
        message:
            'For uploading templates, we would need to provide a user the interface to select associated folders and files along with the dbook they wish to save to the registry.',
        timestamp: '12:00',
    },
    {
        id: '4',
        message:
            'Do we want to consider some of the management of metacell / template registries as a UI/UX flow occurring outside of Studio itself? i.e. it is a platform level user journey?',
        timestamp: '12:01',
    },
    {
        id: '5',
        message:
            'For uploading templates, we would need to provide a user the interface to select associated folders and files along with the dbook they wish to save to the registry.',
        timestamp: '12:00',
    },
    {
        id: '6',
        message:
            'Do we want to consider some of the management of metacell / template registries as a UI/UX flow occurring outside of Studio itself? i.e. it is a platform level user journey?',
        timestamp: '12:01',
    },
];

export const Chat = (): JSX.Element => {
    const [value, setValue] = React.useState(messages);

    return (
        <div style={{ backgroundColor: 'black', display: 'flex' }}>
            <ChatComponent onUpdate={setValue} value={value} />
        </div>
    );
};
