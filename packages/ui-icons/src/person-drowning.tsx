import { faPersonDrowning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PersonDrowning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PersonDrowning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPersonDrowning} {...props} />;
};

export default PersonDrowning;
