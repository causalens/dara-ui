import { faRotateForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RotateForward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RotateForward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotateForward} {...props} />;
};

export default RotateForward;
