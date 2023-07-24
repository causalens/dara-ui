import { faBacterium } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bacterium icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bacterium = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBacterium} {...props} />;
};

export default Bacterium;
