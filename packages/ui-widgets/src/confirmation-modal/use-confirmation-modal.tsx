/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
import { useState } from 'react';

import { ConfirmationModalProps } from './confirmation-modal-props';

interface ConfirmationModalHook<T> {
    /** The props for the modal component, should be spread onto it */
    modalProps: ConfirmationModalProps;
    /** A handler to manually trigger deletion for an element */
    onConfirmation: (item: T) => void | Promise<void>;
}

/**
 * The logic part of the ConfirmationModal system that handles showing/hiding the modal and tracking the item to be deleted,
 * should be used in conjunction with the CCModal component.
 *
 * @param getMessage a function the should return the message to display based off the item passed
 * @param confirm a function that will be called with the item upon confirmation
 */
function useConfirmationModal<T>(
    getMessage: (item: T) => string,
    confirm: (item: T) => void | Promise<void>
): ConfirmationModalHook<T> {
    const [render, setRender] = useState(false);
    const [canceledItem, setCanceledItem] = useState<T>();
    const [message, setMessage] = useState('');

    const onConfirmation = (item: T): void => {
        setMessage(getMessage(item));
        setRender(true);
        setCanceledItem(item);
    };

    const onCancel = (): void => {
        setRender(false);
    };

    const onConfirm = (): void => {
        setRender(false);
        if (confirm) {
            confirm(canceledItem);
        }
    };

    return {
        modalProps: {
            message,
            onCancel,
            onConfirm,
            render,
        },
        onConfirmation,
    };
}

export default useConfirmationModal;
