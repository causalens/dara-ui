import { faSwimmingPool } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SwimmingPool icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SwimmingPool = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSwimmingPool} {...props} />;
};

export default SwimmingPool;
