import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquarePhone icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquarePhone = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquarePhone} {...props} />;
};

export default SquarePhone;
