import { faSquareParking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareParking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareParking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareParking} {...props} />;
};

export default SquareParking;
