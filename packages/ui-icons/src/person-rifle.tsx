import { faPersonRifle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonRifle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonRifle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonRifle} {...props} />;
};

export default PersonRifle;
