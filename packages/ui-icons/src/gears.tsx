import { faGears } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gears icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gears = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGears} {...props} />;
};

export default Gears;
