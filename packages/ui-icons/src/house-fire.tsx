import { faHouseFire } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseFire icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseFire = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseFire} {...props} />;
};

export default HouseFire;
