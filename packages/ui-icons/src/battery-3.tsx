import { faBattery3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery3} {...props} />;
};

export default Battery3;
