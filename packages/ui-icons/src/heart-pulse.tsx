import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartPulse icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartPulse = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartPulse} {...props} />;
};

export default HeartPulse;
