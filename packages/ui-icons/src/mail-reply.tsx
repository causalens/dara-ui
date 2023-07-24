import { faMailReply } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MailReply icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MailReply = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMailReply} {...props} />;
};

export default MailReply;
