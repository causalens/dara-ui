import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CalendarAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CalendarAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalendarAlt} {...props} />;
};

export default CalendarAlt;
