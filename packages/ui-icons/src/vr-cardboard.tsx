import { faVrCardboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VrCardboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VrCardboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVrCardboard} {...props} />;
};

export default VrCardboard;
