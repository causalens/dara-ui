import { faUnlock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Unlock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Unlock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faUnlock} {...props} />;
};

export default Unlock;
