import { faPersonSnowboarding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonSnowboarding icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonSnowboarding = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonSnowboarding} {...props} />;
};

export default PersonSnowboarding;
