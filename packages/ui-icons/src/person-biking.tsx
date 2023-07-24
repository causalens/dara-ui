import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonBiking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonBiking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonBiking} {...props} />;
};

export default PersonBiking;
