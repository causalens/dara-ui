import { faIceCream } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IceCream icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IceCream = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIceCream} {...props} />;
};

export default IceCream;
