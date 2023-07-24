import { faHotdog } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hotdog icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hotdog = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHotdog} {...props} />;
};

export default Hotdog;
