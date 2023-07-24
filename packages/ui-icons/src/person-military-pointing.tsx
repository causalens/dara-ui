import { faPersonMilitaryPointing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonMilitaryPointing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonMilitaryPointing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonMilitaryPointing} {...props} />;
};

export default PersonMilitaryPointing;
