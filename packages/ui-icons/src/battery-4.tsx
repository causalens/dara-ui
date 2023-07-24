import { faBattery4 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery4 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery4 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery4} {...props} />;
};

export default Battery4;
