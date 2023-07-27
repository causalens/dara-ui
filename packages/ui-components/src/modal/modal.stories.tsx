/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { Meta } from '@storybook/react';

import { default as ModalComponent, ModalProps } from './modal';

export default {
    component: ModalComponent,
    title: 'UI Components/Modal',
} as Meta;

export const Modal = (args: ModalProps): JSX.Element => <ModalComponent {...args} />;

Modal.args = {
    children: <div>Test Modal</div>,
    render: true,
};
