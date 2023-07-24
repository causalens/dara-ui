import { faInbox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Inbox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Inbox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faInbox} {...props} />;
};

export default Inbox;
