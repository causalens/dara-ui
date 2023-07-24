import { faCheese } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cheese icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cheese = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCheese} {...props} />;
};

export default Cheese;
