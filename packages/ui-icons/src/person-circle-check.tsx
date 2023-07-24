import { faPersonCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCircleCheck} {...props} />;
};

export default PersonCircleCheck;
