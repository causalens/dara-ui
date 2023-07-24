import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HouseChimney icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HouseChimney = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHouseChimney} {...props} />;
};

export default HouseChimney;
