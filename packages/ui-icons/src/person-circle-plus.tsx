import { faPersonCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonCirclePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonCirclePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonCirclePlus} {...props} />;
};

export default PersonCirclePlus;
