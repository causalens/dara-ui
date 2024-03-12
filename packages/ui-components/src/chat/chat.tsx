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
import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styled from '@darajs/styled-components';
import { Xmark } from '@darajs/ui-icons';

import Button from '../button/button';
import TextArea from '../textarea/textarea';
import { InteractiveComponentProps, Message } from '../types';
import { default as MessageComponent } from './message';

const ChatWrapper = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 350px;
    height: calc(100vh - 2rem);
    margin: 1rem;
    padding: 1.5rem;

    background-color: ${(props) => props.theme.colors.background}e6;
    border-radius: 0.4rem;
    box-shadow: ${(props) => props.theme.shadow.medium};
`;

const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-self: flex-end;

    height: 8.6rem;
    margin-top: auto;
`;

const ReplyButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`;

const ChatBody = styled.div`
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 1rem;

    max-height: calc(100% - 9.6rem);
    margin: -1rem;
    padding: 1rem;
`;

const ChatTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 1.625rem;

    font-size: 1.2rem;
`;

const CloseIcon = styled(Xmark)`
    height: 1.2rem;
    color: ${(props) => props.theme.colors.grey4};

    :hover {
        color: ${(props) => props.theme.colors.grey5};
    }

    :active {
        color: ${(props) => props.theme.colors.grey6};
    }
`;

export interface ChatProps extends InteractiveComponentProps<Message[]> {
    /** Event triggered when a message is added */
    onAdd?: (value: Message[]) => void | Promise<void>;
    /** Event triggered when the chat sidebar is closed */
    onClose?: () => void | Promise<void>;
    /** Event triggered when a message is deleted */
    onDelete?: (id: string) => void | Promise<void>;
    /** Event triggered when a message is edited */
    onEdit?: (value: Message[]) => void | Promise<void>;
}

/**
 * A function to get the formatted timestamp to display in the submitted message
 */
function getFormattedTimestamp(): string {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // +1 because months are 0-indexed
    const year = now.getFullYear();

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}

/**
 * A function to scroll to the bottom of the chat so that the latest message is visible
 */
function scrollToBottom(): void {
    setTimeout(() => {
        const scrollContainer = document.getElementById('scrollContainer');
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }, 0); // Timeout of 0ms to allow the DOM to update
}

/**
 * A chat component
 *
 * @param {ChatProps} props - the component props
 */
function Chat({ ...props }: ChatProps): JSX.Element {
    const [reply, setReply] = React.useState('');

    const [messages, setMessages] = React.useState(props.value ?? []);

    const onSubmitMessage = (): void => {
        if (reply) {
            // Create a new message
            const newMessage = {
                id: uuidv4(),
                message: reply,
                timestamp: getFormattedTimestamp(),
            };
            const newMessages = [...messages, newMessage];

            // Add the new message to the chat
            if (props.value !== undefined) {
                props.onAdd?.(newMessages);
            } else {
                setMessages(newMessages);
            }

            // Clear the reply field and scroll to the bottom of the chat to show latest message
            setReply('');
            scrollToBottom();
        }
    };

    const onEditMessage = (message: Message): void => {
        // Find the message to edit and replace it with the new message
        const newMessages = messages.map((m) => {
            if (m.id === message.id) {
                return message;
            }
            return m;
        });
        // Update the chat
        if (props.value !== undefined) {
            props.onEdit?.(newMessages);
        } else {
            setMessages(newMessages);
        }
    };

    const onDeleteMessage = (id: string): void => {
        // Remove the message with the given id
        const newMessages = messages.filter((message) => message.id !== id);
        // Update the chat
        if (props.value !== undefined) {
            props.onDelete?.(id);
        } else {
            setMessages(newMessages);
        }
    };

    React.useEffect(() => {
        // Scroll to the bottom of the chat
        scrollToBottom();
    }, []);

    React.useEffect(() => {
        setMessages(props.value ?? []);
    }, [props.value]);

    return (
        <ChatWrapper className={props.className} style={props.style}>
            <ChatTop>
                <span>Chat</span>
                <CloseIcon onClick={props.onClose} />
            </ChatTop>
            <ChatBody id="scrollContainer">
                {messages.map((message) => (
                    <MessageComponent
                        key={message.id}
                        onChange={onEditMessage}
                        onDelete={onDeleteMessage}
                        value={message}
                    />
                ))}
            </ChatBody>
            <ReplyWrapper>
                <TextArea onChange={setReply} placeholder="Add a comment" resize="none" value={reply} />
                <ReplyButtons>
                    <Button onClick={onSubmitMessage}>Send</Button>
                </ReplyButtons>
            </ReplyWrapper>
        </ChatWrapper>
    );
}

export default Chat;
