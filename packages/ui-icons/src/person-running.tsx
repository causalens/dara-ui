import { faPersonRunning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonRunning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonRunning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonRunning} {...props} />;
};

export default PersonRunning;
