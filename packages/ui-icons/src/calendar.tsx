import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Calendar icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Calendar = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendar} {...props} />;
};

export default Calendar;
