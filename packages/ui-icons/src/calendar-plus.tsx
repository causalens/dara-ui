import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarPlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarPlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarPlus} {...props} />;
};

export default CalendarPlus;
