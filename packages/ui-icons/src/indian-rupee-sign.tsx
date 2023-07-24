import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * IndianRupeeSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const IndianRupeeSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIndianRupeeSign} {...props} />;
};

export default IndianRupeeSign;
