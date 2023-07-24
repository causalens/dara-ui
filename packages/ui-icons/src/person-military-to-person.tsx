import { faPersonMilitaryToPerson } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonMilitaryToPerson icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonMilitaryToPerson = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonMilitaryToPerson} {...props} />;
};

export default PersonMilitaryToPerson;
