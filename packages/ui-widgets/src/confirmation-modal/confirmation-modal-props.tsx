/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
export interface ConfirmationModalProps {
    /** the message to display */
    message: string;
    /** A handler for when the cancellation is cancelled */
    onCancel: () => void | Promise<void>;
    /** A handler for when the cancellation is confirmed */
    onConfirm: () => void | Promise<void>;
    /** Wether to render the modal or not */
    render: boolean;
    /**  */
    style?: React.CSSProperties;
    /** modal title to display */
    title?: string;
}
