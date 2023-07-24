import { faTrowel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Trowel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Trowel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrowel} {...props} />;
};

export default Trowel;
