import { faSquare } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Square icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Square = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquare} {...props} />;
};

export default Square;
