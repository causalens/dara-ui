import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TicketSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TicketSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTicketSimple} {...props} />;
};

export default TicketSimple;
