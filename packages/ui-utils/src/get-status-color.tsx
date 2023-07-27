/**
 * Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
 * use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
 */
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
