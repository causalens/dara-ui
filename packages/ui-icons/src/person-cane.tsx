import { faPersonCane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCane} {...props} />;
};

export default PersonCane;
