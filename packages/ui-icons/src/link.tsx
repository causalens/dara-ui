import { faLink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Link icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Link = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLink} {...props} />;
};

export default Link;
