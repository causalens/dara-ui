import { faBahai } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bahai icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bahai = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBahai} {...props} />;
};

export default Bahai;
