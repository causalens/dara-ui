import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckLoading icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckLoading = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckLoading} {...props} />;
};

export default TruckLoading;
