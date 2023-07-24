import { faTruckFieldUn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckFieldUn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckFieldUn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckFieldUn} {...props} />;
};

export default TruckFieldUn;
