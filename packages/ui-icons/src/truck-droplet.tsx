import { faTruckDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckDroplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckDroplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckDroplet} {...props} />;
};

export default TruckDroplet;
