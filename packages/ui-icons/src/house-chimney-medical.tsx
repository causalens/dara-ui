import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseChimneyMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseChimneyMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseChimneyMedical} {...props} />;
};

export default HouseChimneyMedical;
