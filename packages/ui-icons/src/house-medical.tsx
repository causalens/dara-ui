import { faHouseMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseMedical} {...props} />;
};

export default HouseMedical;
