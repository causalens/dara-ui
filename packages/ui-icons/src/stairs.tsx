import { faStairs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Stairs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Stairs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStairs} {...props} />;
};

export default Stairs;
