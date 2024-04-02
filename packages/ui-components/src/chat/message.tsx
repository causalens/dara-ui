/**
 * Copyright 2024 Impulse Innovations Limited
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
import { isEqual } from 'lodash';
import * as React from 'react';

import styled from '@darajs/styled-components';
import { PenToSquare, Trash } from '@darajs/ui-icons';

import Button from '../button/button';
import TextArea from '../textarea/textarea';
import Tooltip from '../tooltip/tooltip';
import { InteractiveComponentProps, Message } from '../types';

const InteractiveIcons = styled.div`
    position: absolute;
    top: 0.75rem;
    left: 236px;

    display: none;
    gap: 0.5rem;

    padding: 0.3rem;

    background-color: ${(props) => props.theme.colors.blue1};
    border-radius: 0.25rem;
    box-shadow: ${(props) => props.theme.shadow.medium};
`;

const MessageWrapper = styled.div`
    position: relative;

    gap: 0.5rem;

    width: 100%;
    padding: 1rem;

    background-color: ${(props) => props.theme.colors.blue1};
    border-radius: 0.25rem;
    box-shadow: ${(props) => props.theme.shadow.medium};

    :hover ${InteractiveIcons} {
        display: flex;
    }
`;

const MessageTop = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 1.625rem;

    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey5};
`;

const MessageBody = styled.div`
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    overflow-wrap: break-word;
`;

const EditedText = styled.span`
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.grey4};
`;

const DeleteIcon = styled(Trash)`
    height: 0.8rem;
    color: ${(props) => props.theme.colors.secondary};

    :hover {
        color: ${(props) => props.theme.colors.secondaryHover}CC;
    }

    :active {
        color: ${(props) => props.theme.colors.secondaryDown}99;
    }
`;

const EditIcon = styled(PenToSquare)`
    height: 0.8rem;
    color: ${(props) => props.theme.colors.secondary};

    :hover {
        color: ${(props) => props.theme.colors.secondaryHover}CC;
    }

    :active {
        color: ${(props) => props.theme.colors.secondaryDown}99;
    }
`;

const EditButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`;

export interface MessageProps extends InteractiveComponentProps<Message> {
    /** An optional onChange handler for listening to changes in the input */
    onChange?: (value: Message, e?: React.SyntheticEvent<HTMLInputElement>) => void | Promise<void>;
    /** An optional event listener for complete events (enter presses) */
    onDelete?: (id: string) => void | Promise<void>;
}

/**
 * A function to get the formatted timestamp to display in the submitted message
 */
export function getFormattedTimestamp(): string {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
    const year = now.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

/**
 * A Message component that displays a message with a timestamp and allows for editing and deleting
 *
 * @param {MessageProps} props - the component props
 */
function MessageComponent(props: MessageProps): JSX.Element {
    const [editMode, setEditMode] = React.useState(false);
    const [editMessage, setEditMessage] = React.useState(props.value.message);
    const [localMessage, setLocalMessage] = React.useState(props.value);
    if (props.value && !isEqual(props.value, localMessage)) {
        setLocalMessage(props.value);
    }

    const onAccept = (): void => {
        // if the message hasn't changed, just close the edit mode
        if (editMessage === localMessage.message) {
            setEditMode(false);
            return;
        }
        // remove any /n and trailing whitespace
        const newMessage = {
            ...localMessage,
            message: editMessage.replace(/\n/g, ' ').trim(),
            updated_at: getFormattedTimestamp(),
        };

        props?.onChange(newMessage);
        setLocalMessage(newMessage);
        // reset the textarea message to the message without the /n and trailing whitespace
        setEditMessage(newMessage.message);
        setEditMode(false);
    };

    const onDelete = (): void => {
        if (props.onDelete) {
            props.onDelete(props.value.id);
        }
    };

    return (
        <MessageWrapper className={props.className} style={props.style}>
            <MessageTop>
                {props.value.created_at}
                {!editMode && (
                    <InteractiveIcons>
                        <EditIcon data-testid="message-edit-button" onClick={() => setEditMode(true)} role="button" />
                        <DeleteIcon data-testid="message-delete-button" onClick={onDelete} role="button" />
                    </InteractiveIcons>
                )}
            </MessageTop>
            {editMode && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextArea onChange={setEditMessage} resize="vertical" value={editMessage} />
                    <EditButtons>
                        <Button onClick={() => setEditMode(false)} outline>
                            Cancel
                        </Button>
                        <Button onClick={onAccept}>Save</Button>
                    </EditButtons>
                </div>
            )}
            {!editMode && (
                <MessageBody>
                    {localMessage.message}
                    {localMessage.updated_at && (
                        <Tooltip content={props.value.updated_at}>
                            <EditedText> (edited)</EditedText>
                        </Tooltip>
                    )}
                </MessageBody>
            )}
        </MessageWrapper>
    );
}

export default MessageComponent;
