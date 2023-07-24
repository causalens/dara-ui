import { faPersonSkating } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonSkating icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonSkating = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonSkating} {...props} />;
};

export default PersonSkating;
