import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChalkboardUser icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChalkboardUser = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChalkboardUser} {...props} />;
};

export default ChalkboardUser;
