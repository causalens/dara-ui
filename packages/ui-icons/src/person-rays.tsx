import { faPersonRays } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonRays icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonRays = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonRays} {...props} />;
};

export default PersonRays;
