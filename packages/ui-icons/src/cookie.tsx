import { faCookie } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cookie icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cookie = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCookie} {...props} />;
};

export default Cookie;
