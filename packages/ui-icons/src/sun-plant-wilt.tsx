import { faSunPlantWilt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SunPlantWilt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SunPlantWilt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSunPlantWilt} {...props} />;
};

export default SunPlantWilt;
