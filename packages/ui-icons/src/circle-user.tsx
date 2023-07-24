import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleUser} {...props} />;
};

export default CircleUser;
