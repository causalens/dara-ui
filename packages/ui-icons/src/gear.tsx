import { faGear } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gear icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gear = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGear} {...props} />;
};

export default Gear;
