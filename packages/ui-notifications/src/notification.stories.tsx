/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { Meta } from '@storybook/react';

import { Status } from '@darajs/ui-utils';

import { default as NotificationComponent, NotificationProps } from './notification';
import { NotificationPayload } from './notification-payload';

export default {
    component: NotificationComponent,
    title: 'UI Components/Notification',
} as Meta;

const Template = (args: NotificationProps): JSX.Element => <NotificationComponent {...args} />;

const infoMessage: NotificationPayload = {
    key: 'test',
    message: 'It is a useful piece of information, check it out. I want to make this overflow.',
    status: Status.CREATED,
};

export const InfoNotification = Template.bind({});

InfoNotification.args = {
    notification: infoMessage,
};

const infoTitleMessage: NotificationPayload = {
    key: 'test',
    message: 'It is a useful piece of information, check it out. I want to make this overflow.',
    status: Status.CREATED,
    title: 'Information',
};

export const TitleInfoNotification = Template.bind({});

TitleInfoNotification.args = {
    notification: infoTitleMessage,
};

const successMessage: NotificationPayload = {
    key: 'test',
    message: 'Your job is complete, congratulations!',
    status: Status.SUCCESS,
    title: 'Success',
};

export const SuccessNotification = Template.bind({});

SuccessNotification.args = {
    notification: successMessage,
};

const warningMessage: NotificationPayload = {
    key: 'test',
    message: 'This might cause a trouble, be careful.',
    status: Status.WARNING,
    title: 'Warning',
};

export const WarningNotification = Template.bind({});

WarningNotification.args = {
    notification: warningMessage,
};

const errorMessage: NotificationPayload = {
    key: 'test',
    message: 'Try again or contact the application owner.',
    status: Status.ERROR,
    title: 'Error',
};

export const ErrorNotification = Template.bind({});

ErrorNotification.args = {
    notification: errorMessage,
};
