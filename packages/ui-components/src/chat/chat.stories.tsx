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
import { UserData } from '../types';

export default {
    component: ChatComponent,
    title: 'UI Components/Chat',
} as Meta;

const testUser: UserData = {
    user_name: 'Test User',
    user_id: 'test_user_id',
}

const testUser2: UserData = {
    user_name: 'Harry Potter',
    user_id: 'test_user_id2',
}

const messages = [
    {
        id: 'yYZ1_TTZbL9is7RhG_C0l',
        message:
            'For uploading templates, we would need to provide a user the interface to select associated folders and files along with the dbook they wish to save to the registry.',
        created_at: '2024-04-03T10:34:05.502Z',
        updated_at: '2024-04-03T10:34:05.502Z',
        user: testUser,
    },
    {
        id: 'oGbwtu9PHMVNYbFfxN7Br',
        message:
            'Do we want to consider some of the management of metacell / template registries as a UI/UX flow occurring outside of Studio itself? i.e. it is a platform level user journey?',
        created_at: '2024-04-03T10:34:17.167Z',
        updated_at: '2024-04-03T10:34:17.167Z',
        user: testUser,
    },
    {
        id: 'ocRSEZU9DeILt8MvyKu0b',
        message: 'This is another test message, which has been edited!',
        created_at: '2024-04-03T10:34:26.944Z',
        updated_at: '2024-04-03T10:34:45.061Z',
        user: testUser2,
    },
    {
        id: 'ctDqA50c0b13FQKY0E1tm',
        message: 'test\n**abc**\nhello there',
        created_at: '2024-04-03T15:55:05.031Z',
        updated_at: '2024-04-03T15:55:05.031Z',
    },
];



export const Chat = (): JSX.Element => {
    const [value, setValue] = React.useState(messages);

    return (
        <div style={{ backgroundColor: 'black', display: 'flex' }}>
            <ChatComponent active_user={testUser} onUpdate={setValue} value={value} />
        </div>
    );
};
