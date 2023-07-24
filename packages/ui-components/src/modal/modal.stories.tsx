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
