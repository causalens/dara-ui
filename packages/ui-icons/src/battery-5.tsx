import { faBattery5 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Battery5 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Battery5 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBattery5} {...props} />;
};

export default Battery5;
