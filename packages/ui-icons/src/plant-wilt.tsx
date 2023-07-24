import { faPlantWilt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlantWilt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlantWilt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlantWilt} {...props} />;
};

export default PlantWilt;
