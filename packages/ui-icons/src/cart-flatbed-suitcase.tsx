import { faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CartFlatbedSuitcase icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CartFlatbedSuitcase = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCartFlatbedSuitcase} {...props} />;
};

export default CartFlatbedSuitcase;
