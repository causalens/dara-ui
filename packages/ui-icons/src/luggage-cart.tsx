import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LuggageCart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LuggageCart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLuggageCart} {...props} />;
};

export default LuggageCart;
