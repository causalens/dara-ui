import { faArchive } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Archive icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Archive = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArchive} {...props} />;
};

export default Archive;
