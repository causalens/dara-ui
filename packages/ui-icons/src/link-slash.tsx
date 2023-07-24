import { faLinkSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LinkSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LinkSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLinkSlash} {...props} />;
};

export default LinkSlash;
