import { faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarXmark} {...props} />;
};

export default CalendarXmark;
