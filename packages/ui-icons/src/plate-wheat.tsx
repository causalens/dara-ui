import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlateWheat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlateWheat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlateWheat} {...props} />;
};

export default PlateWheat;
