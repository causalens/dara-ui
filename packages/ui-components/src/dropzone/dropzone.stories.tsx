import { Meta } from '@storybook/react';

import { default as DropzoneComponent, UploadDropzoneProps } from './dropzone';

export default {
    component: DropzoneComponent,
    title: 'UI Components/Dropzone',
} as Meta;

export const Dropzone = (props: UploadDropzoneProps): JSX.Element => <DropzoneComponent {...props} />;
