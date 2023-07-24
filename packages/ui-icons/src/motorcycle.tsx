import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Motorcycle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Motorcycle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMotorcycle} {...props} />;
};

export default Motorcycle;
