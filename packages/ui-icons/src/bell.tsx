import { faBell } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bell icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bell = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBell} {...props} />;
};

export default Bell;
