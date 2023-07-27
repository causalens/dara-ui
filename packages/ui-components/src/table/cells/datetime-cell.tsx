/**
* Copyright (c) 2023 by Impulse Innovations Ltd. Part of the causaLens product.
*
* Use of this software is governed by the Business Source License 1.1 included in the file LICENSES/BSL.txt.
*
* As of the Change Date specified in that file, in accordance with the Business Source License 1.1,
* use of this software will be governed by the Apache License, Version 2.0, included in the file LICENSES/APL.txt.
*/
import { format, parseISO } from 'date-fns';

/** Interface is very loose because react table basically lets anything go through here */
interface DateCellProps {
    value: any;
}

/**
 * A date formatting cell that will accept native JS date objects and render them according to a string format
 *
 * @param fmt the date format to render the Date as
 */
function DatetimeCell(fmt = 'yyyy-MM-dd HH:mm'): (props: DateCellProps) => string {
    return ({ value }: DateCellProps): string => {
        if (!value) {
            return '';
        }

        const parsed = parseISO(value);
        if (Number.isNaN(parsed.getTime())) {
            return '';
        }

        return format(parsed, fmt);
    };
}

export default DatetimeCell;
