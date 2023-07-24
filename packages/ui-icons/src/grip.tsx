import { faGrip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Grip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Grip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrip} {...props} />;
};

export default Grip;
