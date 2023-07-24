import { faAmbulance } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ambulance icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ambulance = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAmbulance} {...props} />;
};

export default Ambulance;
