import { faBattery } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery} {...props} />;
};

export default Battery;
