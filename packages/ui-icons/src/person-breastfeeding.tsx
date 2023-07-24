import { faPersonBreastfeeding } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonBreastfeeding icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonBreastfeeding = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonBreastfeeding} {...props} />;
};

export default PersonBreastfeeding;
