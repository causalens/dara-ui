import { faBong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBong} {...props} />;
};

export default Bong;
