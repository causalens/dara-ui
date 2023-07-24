import { faPersonCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCircleExclamation} {...props} />;
};

export default PersonCircleExclamation;
