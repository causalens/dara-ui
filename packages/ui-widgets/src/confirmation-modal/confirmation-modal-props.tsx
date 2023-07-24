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
