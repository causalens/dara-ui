import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarDay icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarDay = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarDay} {...props} />;
};

export default CalendarDay;
