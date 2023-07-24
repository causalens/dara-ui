import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UserGraduate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UserGraduate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUserGraduate} {...props} />;
};

export default UserGraduate;
