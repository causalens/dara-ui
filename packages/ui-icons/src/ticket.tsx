import { faTicket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ticket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ticket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTicket} {...props} />;
};

export default Ticket;
