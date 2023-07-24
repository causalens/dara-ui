import { faSync } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sync icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sync = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSync} {...props} />;
};

export default Sync;
