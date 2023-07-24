import { faMarsAndVenusBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsAndVenusBurst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsAndVenusBurst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsAndVenusBurst} {...props} />;
};

export default MarsAndVenusBurst;
