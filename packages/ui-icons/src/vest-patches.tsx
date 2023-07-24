import { faVestPatches } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VestPatches icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VestPatches = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVestPatches} {...props} />;
};

export default VestPatches;
