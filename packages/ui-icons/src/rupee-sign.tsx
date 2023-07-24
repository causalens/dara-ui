import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RupeeSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RupeeSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRupeeSign} {...props} />;
};

export default RupeeSign;
