import { faHomeUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HomeUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HomeUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHomeUser} {...props} />;
};

export default HomeUser;
