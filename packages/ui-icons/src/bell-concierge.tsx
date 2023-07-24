import { faBellConcierge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BellConcierge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BellConcierge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBellConcierge} {...props} />;
};

export default BellConcierge;
