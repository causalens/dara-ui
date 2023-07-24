import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MailBulk icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MailBulk = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMailBulk} {...props} />;
};

export default MailBulk;
