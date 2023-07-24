import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LockOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LockOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLockOpen} {...props} />;
};

export default LockOpen;
