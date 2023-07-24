import { faMailForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MailForward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MailForward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMailForward} {...props} />;
};

export default MailForward;
