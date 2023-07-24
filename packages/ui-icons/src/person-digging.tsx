import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonDigging icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonDigging = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonDigging} {...props} />;
};

export default PersonDigging;
