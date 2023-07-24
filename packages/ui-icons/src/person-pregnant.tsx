import { faPersonPregnant } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonPregnant icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonPregnant = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonPregnant} {...props} />;
};

export default PersonPregnant;
