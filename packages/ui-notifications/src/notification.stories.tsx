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
