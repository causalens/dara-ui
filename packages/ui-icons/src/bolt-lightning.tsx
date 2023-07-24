import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BoltLightning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BoltLightning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBoltLightning} {...props} />;
};

export default BoltLightning;
