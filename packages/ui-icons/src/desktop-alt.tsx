import { faDesktopAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DesktopAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DesktopAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDesktopAlt} {...props} />;
};

export default DesktopAlt;
