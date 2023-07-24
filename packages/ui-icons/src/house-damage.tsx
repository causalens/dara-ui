import { faHouseDamage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseDamage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseDamage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseDamage} {...props} />;
};

export default HouseDamage;
