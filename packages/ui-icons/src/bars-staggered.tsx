import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BarsStaggered icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BarsStaggered = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBarsStaggered} {...props} />;
};

export default BarsStaggered;
