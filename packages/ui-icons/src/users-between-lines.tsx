import { faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UsersBetweenLines icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UsersBetweenLines = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUsersBetweenLines} {...props} />;
};

export default UsersBetweenLines;
