import { faUnlink } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Unlink icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Unlink = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnlink} {...props} />;
};

export default Unlink;
