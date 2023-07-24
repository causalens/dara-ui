import { faSquareH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareH} {...props} />;
};

export default SquareH;
