import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserDoctor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserDoctor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserDoctor} {...props} />;
};

export default UserDoctor;
