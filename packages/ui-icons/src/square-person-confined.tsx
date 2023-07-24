import { faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePersonConfined icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePersonConfined = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePersonConfined} {...props} />;
};

export default SquarePersonConfined;
