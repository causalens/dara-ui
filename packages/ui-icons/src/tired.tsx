import { faTired } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tired icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tired = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTired} {...props} />;
};

export default Tired;
