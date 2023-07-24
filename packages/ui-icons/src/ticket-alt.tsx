import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TicketAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TicketAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTicketAlt} {...props} />;
};

export default TicketAlt;
