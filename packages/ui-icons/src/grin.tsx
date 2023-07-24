import { faGrin } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Grin icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Grin = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGrin} {...props} />;
};

export default Grin;
