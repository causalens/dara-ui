import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ComputerMouse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ComputerMouse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faComputerMouse} {...props} />;
};

export default ComputerMouse;
