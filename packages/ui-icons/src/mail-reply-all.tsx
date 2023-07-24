import { faMailReplyAll } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MailReplyAll icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MailReplyAll = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMailReplyAll} {...props} />;
};

export default MailReplyAll;
