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
import { isEqual } from 'lodash';
import { nanoid } from 'nanoid';
import * as React from 'react';

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
    gap: 1rem;

    max-height: calc(100% - 10.225rem);
    margin: -0.25rem;
    padding: 0.25rem;
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
    /** Event triggered when the chat sidebar is closed */
    onClose?: () => void | Promise<void>;
    /** Event triggered when the chat is changed */
    onUpdate?: (value: Message[]) => void | Promise<void>;
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
function scrollToBottom(node: HTMLElement | null): void {
    setTimeout(() => {
        if (node) {
            node.scrollTop = node.scrollHeight;
        }
    }, 100);
}

/**
 * A chat component
 *
 * @param {ChatProps} props - the component props
 */
function Chat(props: ChatProps): JSX.Element {
    const [reply, setReply] = React.useState('');

    const [localMessages, setLocalMessages] = React.useState(props.value ?? []);
    if (props.value && !isEqual(props.value, localMessages)) {
        setLocalMessages(props.value);
    }

    const chatBodyRef = React.useRef<HTMLDivElement>(null);

    const onSubmitMessage = (): void => {
        if (reply) {
            // Create a new message
            const newMessage = {
                id: nanoid(),
                message: reply,
                timestamp: getFormattedTimestamp(),
            };
            const newMessages = [...localMessages, newMessage];

            // Add the new message to the chat
            props.onUpdate?.(newMessages);
            setLocalMessages(newMessages);

            // Clear the reply field and scroll to the bottom of the chat to show latest message
            setReply('');
            scrollToBottom(chatBodyRef?.current);
        }
    };

    const onEditMessage = (message: Message): void => {
        // Find the message to edit and replace it with the new message
        const newMessages = localMessages.map((m) => {
            if (m.id === message.id) {
                return message;
            }
            return m;
        });
        // Update the chat
        props.onUpdate?.(newMessages);
        setLocalMessages(newMessages);
    };

    const onDeleteMessage = (id: string): void => {
        // Remove the message with the given id
        const newMessages = localMessages.filter((message) => message.id !== id);
        // Update the chat
        props.onUpdate?.(newMessages);
        setLocalMessages(newMessages);
    };

    React.useLayoutEffect(() => {
        scrollToBottom(chatBodyRef?.current);
    }, []);

    return (
        <ChatWrapper className={props.className} style={props.style}>
            <ChatTop>
                <span>Chat</span>
                <CloseIcon onClick={props.onClose} />
            </ChatTop>
            <ChatBody ref={chatBodyRef}>
                {localMessages.map((message) => (
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