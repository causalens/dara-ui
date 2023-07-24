import { faBurst } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Burst icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Burst = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBurst} {...props} />;
};

export default Burst;
