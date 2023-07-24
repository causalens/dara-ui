import { faPersonShelter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonShelter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonShelter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonShelter} {...props} />;
};

export default PersonShelter;
