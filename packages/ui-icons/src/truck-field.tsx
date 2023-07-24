import { faTruckField } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TruckField icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TruckField = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTruckField} {...props} />;
};

export default TruckField;
