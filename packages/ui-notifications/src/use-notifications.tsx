/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { CurriedFunction2 } from 'lodash';
import curry from 'lodash/curry';
import { useContext } from 'react';

import { Status } from '@darajs/ui-utils';

import { NotificationPayload } from './notification-payload';
import { NotificationContext } from './notification-wrapper';

interface AnyError extends Error {
    status?: string;
}

export interface UseNotificationsInterface {
    pushErrorNotification: CurriedFunction2<string, Error, void>;
    pushNotification: (notification: NotificationPayload) => void;
    pushWarningNotification: CurriedFunction2<string, Error, void>;
}

/**
 * A helper hook that exposes some helpful methods for defining notifications quickly based of error messages. The error
 * and warning functions are both curried so they can easily be dropped into error handling call backs with only the
 * title defined
 */
export function useNotifications(): UseNotificationsInterface {
    const { push } = useContext(NotificationContext);

    const notificationFromError = (status: Status): CurriedFunction2<string, any, void> =>
        curry((title: string, err: AnyError): void => {
            const message = err?.status ? `${err.status}: ${err.message}` : err.message;
            push({
                key: title,
                message,
                status,
                title: `${status.toUpperCase()}: ${title}`,
            });
        });

    return {
        pushErrorNotification: notificationFromError(Status.ERROR),
        pushNotification: push,
        pushWarningNotification: notificationFromError(Status.WARNING),
    };
}
