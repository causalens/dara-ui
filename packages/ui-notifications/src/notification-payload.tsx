import { Status } from '@darajs/ui-utils';

/**
 * The Data structure for defining a notification
 */
export interface NotificationPayload {
    key: string;
    message: string;
    status: Status;
    title?: string;
}
