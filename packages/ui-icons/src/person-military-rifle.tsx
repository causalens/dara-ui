import { faPersonMilitaryRifle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonMilitaryRifle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonMilitaryRifle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonMilitaryRifle} {...props} />;
};

export default PersonMilitaryRifle;
