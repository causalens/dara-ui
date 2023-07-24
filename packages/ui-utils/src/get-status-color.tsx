import { Status } from './constants';

interface Colors {
    error: string;
    primary: string;
    success: string;
    warning: string;
}

/**
 * Helper function to get the color (as a hex string) for a given status
 *
 * @param status the status to display
 * @param theme the styled components theme from context
 */
const getStatusColor = (status: Status, colors: Colors): string => {
    if ([Status.ERROR, Status.FAILED].includes(status)) {
        return colors.error;
    }
    if ([Status.CANCELED, Status.WARNING].includes(status)) {
        return colors.warning;
    }
    return status === Status.SUCCESS ? colors.success : colors.primary;
};

export default getStatusColor;
