import { faTshirt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tshirt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tshirt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTshirt} {...props} />;
};

export default Tshirt;
