import { faSquareNfi } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareNfi icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareNfi = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareNfi} {...props} />;
};

export default SquareNfi;
