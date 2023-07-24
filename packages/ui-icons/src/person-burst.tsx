import { faPersonBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonBurst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonBurst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonBurst} {...props} />;
};

export default PersonBurst;
