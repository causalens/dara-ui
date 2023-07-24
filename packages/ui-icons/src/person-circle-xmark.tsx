import { faPersonCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCircleXmark} {...props} />;
};

export default PersonCircleXmark;
