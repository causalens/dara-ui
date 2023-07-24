import { faPersonHarassing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonHarassing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonHarassing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonHarassing} {...props} />;
};

export default PersonHarassing;
