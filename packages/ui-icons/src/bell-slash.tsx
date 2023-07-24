import { faBellSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BellSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BellSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBellSlash} {...props} />;
};

export default BellSlash;
