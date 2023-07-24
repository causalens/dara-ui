import { faHouseCrack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseCrack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseCrack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseCrack} {...props} />;
};

export default HouseCrack;
