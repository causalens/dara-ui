import { faGasPump } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GasPump icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GasPump = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGasPump} {...props} />;
};

export default GasPump;
