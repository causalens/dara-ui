import { faHammer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hammer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hammer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHammer} {...props} />;
};

export default Hammer;
