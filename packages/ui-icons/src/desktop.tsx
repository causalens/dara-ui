import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Desktop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Desktop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDesktop} {...props} />;
};

export default Desktop;
