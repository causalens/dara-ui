import { faTruckMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckMedical} {...props} />;
};

export default TruckMedical;
