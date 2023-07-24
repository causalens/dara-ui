import { faJoint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Joint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Joint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJoint} {...props} />;
};

export default Joint;
