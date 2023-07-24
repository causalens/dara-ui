import { useCallback, useContext, useEffect, useState } from 'react';
import * as React from 'react';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import styled from '@darajs/styled-components';
import { useSubscription } from '@darajs/ui-utils';

import Notification from './notification';
import { NotificationPayload } from './notification-payload';

const Container = styled.div`
    pointer-events: none;

    position: fixed;
    z-index: 6000;
    right: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;

    width: 324px;
    height: 100%;
    padding: 0.75rem 0;
`;

interface NotificationContext {
    notifications$: Subject<NotificationPayload>;
    push: (notification: NotificationPayload) => void;
}

const baseNotifications$ = new Subject<NotificationPayload>();

/**
 * The main notification context, it exposes a stream of notifications to anything wanting to consume them as well as a
 * generic push method for sending a new one
 */
export const NotificationContext = React.createContext({
    notifications$: baseNotifications$,
    push: (notification: NotificationPayload) => baseNotifications$.next(notification),
});

const EXPIRY = 9900; // Set to just below 10s so notifications close before polling occurs

interface NotificationWrapperProps {
    /** Optional, pass through of the native style property */
    style?: React.CSSProperties;
}

/**
 * The notification wrapper adds an invisible container to the right hand side of the application that feeds
 * notifications in from the bottom by subscribing to the notifications$ stream on context
 *
 * @param props the component props
 */
function NotificationWrapper(props: NotificationWrapperProps): JSX.Element {
    const [notifications, setNotifications] = useState<Array<NotificationPayload>>([]);
    const wrapSub = useSubscription();
    const { notifications$ } = useContext(NotificationContext);

    // Subscribe to the notifications stream and add them to the list of notifications to render
    useEffect(() => {
        if (notifications$) {
            wrapSub(
                notifications$.subscribe({
                    next: (notification) => {
                        setNotifications((prev) => [...prev.filter((n) => n.key !== notification.key), notification]);
                    },
                })
            );
        }
    }, [notifications$]);

    // Subscribe to the notifications stream delayed by 10s and remove notifications from the list
    useEffect(() => {
        wrapSub(
            notifications$.pipe(delay(EXPIRY)).subscribe({
                next: (notification) => {
                    setNotifications((prev) => prev.filter(({ key }) => notification.key !== key));
                },
            })
        );
    }, [notifications$]);

    const onDismiss = useCallback((key: string) => {
        setNotifications((prev) => prev.filter((notification) => notification.key !== key));
    }, []);

    return (
        <Container style={props.style}>
            {notifications.map((notification) => (
                <Notification key={notification.key} notification={notification} onDismiss={onDismiss} />
            ))}
        </Container>
    );
}

export default NotificationWrapper;
