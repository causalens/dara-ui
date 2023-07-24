import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarCheck} {...props} />;
};

export default CalendarCheck;
