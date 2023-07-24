import { faTractor } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tractor icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tractor = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTractor} {...props} />;
};

export default Tractor;
