import { faBasketball } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Basketball icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Basketball = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBasketball} {...props} />;
};

export default Basketball;
