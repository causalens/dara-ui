import { faBomb } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bomb icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bomb = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBomb} {...props} />;
};

export default Bomb;
