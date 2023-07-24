import { faPersonDressBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonDressBurst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonDressBurst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonDressBurst} {...props} />;
};

export default PersonDressBurst;
