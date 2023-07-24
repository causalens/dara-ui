import { faBone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBone} {...props} />;
};

export default Bone;
