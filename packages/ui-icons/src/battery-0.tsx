import { faBattery0 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery0 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery0 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery0} {...props} />;
};

export default Battery0;
