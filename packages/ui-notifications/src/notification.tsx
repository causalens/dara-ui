import { mix } from 'polished';

import styled from '@darajs/styled-components';
import { CircleCheck, CircleInfo, CircleXmark, Cross, TriangleExclamation } from '@darajs/ui-icons';
import { Status, getStatusColor } from '@darajs/ui-utils';

import { NotificationPayload } from './notification-payload';

interface NotificationWrapperProps {
    hasTitle: boolean;
    status: Status;
}

interface NotificationIconsProps {
    status: Status;
}

const NotificationWrapper = styled.div<NotificationWrapperProps>`
    pointer-events: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 22rem;
    height: ${(props) => (props.hasTitle ? '5.625rem' : '4.375rem')};
    padding: 1rem;

    color: ${(props) => getStatusColor(props.status, props.theme.colors)};

    background-color: ${(props) =>
        mix(0.1, getStatusColor(props.status, props.theme.colors), props.theme.colors.background)};
    border: 1px solid ${(props) => getStatusColor(props.status, props.theme.colors)};
    border-radius: 0.25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Message = styled.div`
    display: flex;
    flex-direction: column;

    width: 15.75rem;

    font-size: 1rem;
    line-height: 1.1875rem;
`;

// -webkit-box worked in Chrome, Safari and Firefox so we will be ignoring linting here as it was the simplest solution
const Heading = styled.h2`
    overflow: hidden;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */

    font-size: 1rem;
    font-weight: 700;
    text-overflow: ellipsis;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
`;

const Body = styled.span`
    overflow: hidden;
    display: -webkit-box; /* stylelint-disable-line value-no-vendor-prefix */

    font-weight: 400;
    text-overflow: ellipsis;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

const Icon = styled.div<NotificationIconsProps>`
    display: flex;

    svg {
        width: 1.5rem;
        height: 1.3125rem;
        color: ${(props) => getStatusColor(props.status, props.theme.colors)};
    }
`;

const CloseBtn = styled(Cross)<NotificationIconsProps>`
    height: 1.2rem;
    color: ${(props) => getStatusColor(props.status, props.theme.colors)};
`;

function getIcon(status: Status): JSX.Element {
    if ([Status.ERROR, Status.FAILED].includes(status)) {
        return <CircleXmark />;
    }
    if ([Status.CANCELED, Status.WARNING].includes(status)) {
        return <TriangleExclamation />;
    }
    return status === Status.SUCCESS ? <CircleCheck /> : <CircleInfo />;
}

export interface NotificationProps {
    /** The notification to render */
    notification: NotificationPayload;
    /** Handler to trigger the dismissal of the notification */
    onDismiss: (key: string) => void | Promise<void>;
}

/**
 * Simple display component for a notification, will pick up the status, title and message and display them. Also
 * renders a dismiss button in the top right corner.
 *
 * @param props the component props
 */
function Notification(props: NotificationProps): JSX.Element {
    return (
        <NotificationWrapper hasTitle={!!props.notification.title} status={props.notification.status}>
            <Icon status={props.notification.status}>{getIcon(props.notification.status)}</Icon>
            <Message>
                <Heading>{props.notification.title}</Heading>
                <Body>{props.notification.message}</Body>
            </Message>
            <CloseBtn
                asButton
                onClick={() => props.onDismiss(props.notification.key)}
                status={props.notification.status}
            />
        </NotificationWrapper>
    );
}

export default Notification;
