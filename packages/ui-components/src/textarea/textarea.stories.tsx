import { Meta } from '@storybook/react';

import { default as TextAreaComponent, TextAreaProps } from './textarea';

export default {
    component: TextAreaComponent,
    title: 'UI Components/Textarea',
} as Meta;

export const Textarea = (props: TextAreaProps): JSX.Element => <TextAreaComponent {...props} />;

Textarea.args = {
    resize: 'horizontal',
    style: { height: '50%', width: '300px' },
};
