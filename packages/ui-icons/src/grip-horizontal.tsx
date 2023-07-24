import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GripHorizontal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GripHorizontal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGripHorizontal} {...props} />;
};

export default GripHorizontal;
