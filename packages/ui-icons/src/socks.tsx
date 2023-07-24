import { faSocks } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Socks icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Socks = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSocks} {...props} />;
};

export default Socks;
