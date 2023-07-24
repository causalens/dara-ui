import { faVialVirus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VialVirus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VialVirus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVialVirus} {...props} />;
};

export default VialVirus;
