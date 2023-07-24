import { faBedPulse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BedPulse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BedPulse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBedPulse} {...props} />;
};

export default BedPulse;
