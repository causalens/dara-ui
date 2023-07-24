import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarTimes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarTimes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarTimes} {...props} />;
};

export default CalendarTimes;
