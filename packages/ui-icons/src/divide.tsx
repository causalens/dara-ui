import { faDivide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Divide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Divide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDivide} {...props} />;
};

export default Divide;
