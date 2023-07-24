import { faPersonCircleMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCircleMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCircleMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCircleMinus} {...props} />;
};

export default PersonCircleMinus;
