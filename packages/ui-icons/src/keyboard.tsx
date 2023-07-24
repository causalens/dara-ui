import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Keyboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Keyboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKeyboard} {...props} />;
};

export default Keyboard;
