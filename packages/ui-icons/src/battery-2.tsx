import { faBattery2 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery2 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery2 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery2} {...props} />;
};

export default Battery2;
