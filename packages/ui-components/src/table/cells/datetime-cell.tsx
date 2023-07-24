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
