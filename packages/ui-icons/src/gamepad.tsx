import { faGamepad } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gamepad icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gamepad = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGamepad} {...props} />;
};

export default Gamepad;
