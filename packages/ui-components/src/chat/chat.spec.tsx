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

/* eslint-disable jest/no-disabled-tests */
import { fireEvent, render } from '@testing-library/react';

import { ThemeProvider, theme } from '@darajs/styled-components';

import Chat, { ChatProps } from './chat';
import { Message } from '../types';


function RenderChat(props: ChatProps): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Chat {...props} />
        </ThemeProvider>
    );
}

const mockMessages: Message[] = [
    {
        id: '1',
        message: 'Hello',
        timestamp: '12:00',
    },
    {
        id: '2',
        message: 'Hi',
        timestamp: '12:01',
    },
    {
        id: '3',
        message: 'Hey',
        timestamp: '12:02',
    },
];

describe('Chat', () => {
    it('should be able to add a message', () => {
        const { getByRole, getByText } = render(<RenderChat />);
        const textArea = getByRole('textbox');
        // Write a message in textare
        fireEvent.change(textArea, { target: { value: 'Hello' } });
        expect(textArea).toHaveValue('Hello');

        // Click the send button
        const button = getByRole('button', { name: /send/i });
        fireEvent.click(button);

        // Check that the message is added
        expect(getByText('Hello')).toBeInTheDocument();
    });

    it('onUpdate should be called when submiting a message', () => {
        const onUpdate = jest.fn();
        const { getByRole } = render(<RenderChat onUpdate={onUpdate} value={mockMessages} />);

        // Write a new message
        const textArea = getByRole('textbox');
        fireEvent.change(textArea, { target: { value: 'Test' } });
        expect(textArea).toHaveValue('Test');

        // Send message
        const button = getByRole('button', { name: /send/i });
        fireEvent.click(button);

        // Check that onUpdate was called with the new message
        expect(onUpdate).toHaveBeenCalledWith(
            expect.arrayContaining([...mockMessages, expect.objectContaining({ message: 'Test' })])
        );
    });

    it('cancel edited message should not trigger onUpdate', () => {
        const onUpdate = jest.fn();
        const { getByRole, getAllByTestId, getAllByRole, getByDisplayValue } = render(
            <RenderChat onUpdate={onUpdate} value={mockMessages} />
        );

        // Check that there is only one textarea which is to add new messages
        expect(getAllByRole('textbox')).toHaveLength(1);

        // Find edit button and edit first message
        const editButton = getAllByTestId('message-edit-button');
        fireEvent.click(editButton[0]);
        const editArea = getByDisplayValue('Hello');
        expect(editArea).toBeInTheDocument();

        // Change the message value
        fireEvent.change(editArea, { target: { value: 'Hello2' } });

        // Click cancel and check onUpdate is not called
        const cancelButton = getByRole('button', { name: /cancel/i });
        fireEvent.click(cancelButton);
        expect(onUpdate).toHaveBeenCalledTimes(0);
    });

    it('save edited message should trigger onUpdate', () => {
        const onUpdate = jest.fn();
        const { getByRole, getAllByTestId, getAllByRole, getByDisplayValue } = render(
            <RenderChat onUpdate={onUpdate} value={mockMessages} />
        );

        // Check no messages are currently in edit mode
        expect(getAllByRole('textbox')).toHaveLength(1);

        // Start editing first message
        const editButton = getAllByTestId('message-edit-button');
        fireEvent.click(editButton[0]);
        const editArea = getByDisplayValue('Hello');
        expect(editArea).toBeInTheDocument();

        // Change the message value and save the changes
        fireEvent.change(editArea, { target: { value: 'Hello2' } });
        const saveButton = getByRole('button', { name: /save/i });
        fireEvent.click(saveButton);

        // Check that onUpdate was called with the new message value
        mockMessages[0].message = 'Hello2';
        mockMessages[0].edited = true;
        expect(onUpdate).toHaveBeenCalledWith(mockMessages);
    });

    it('delete message should trigger onUpdate', () => {
        const onUpdate = jest.fn();
        const { getAllByTestId } = render(<RenderChat onUpdate={onUpdate} value={mockMessages} />);

        // Delete the first message
        const deleteButton = getAllByTestId('message-delete-button');
        fireEvent.click(deleteButton[0]);

        expect(onUpdate).toHaveBeenCalledWith(mockMessages.slice(1));
    });
});
