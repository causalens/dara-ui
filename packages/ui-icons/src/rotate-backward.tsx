import { faRotateBackward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RotateBackward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RotateBackward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotateBackward} {...props} />;
};

export default RotateBackward;
