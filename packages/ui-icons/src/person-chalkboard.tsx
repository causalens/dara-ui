import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonChalkboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonChalkboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonChalkboard} {...props} />;
};

export default PersonChalkboard;
