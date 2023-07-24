import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarDays icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarDays = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarDays} {...props} />;
};

export default CalendarDays;
