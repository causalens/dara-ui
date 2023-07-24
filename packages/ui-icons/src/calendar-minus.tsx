import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarMinus} {...props} />;
};

export default CalendarMinus;
