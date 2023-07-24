import { faHouseFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseFlag} {...props} />;
};

export default HouseFlag;
