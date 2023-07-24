import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonHiking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonHiking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonHiking} {...props} />;
};

export default PersonHiking;
