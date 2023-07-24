import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * UniversalAccess icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const UniversalAccess = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUniversalAccess} {...props} />;
};

export default UniversalAccess;
