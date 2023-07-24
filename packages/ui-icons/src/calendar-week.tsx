import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarWeek icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarWeek = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarWeek} {...props} />;
};

export default CalendarWeek;
