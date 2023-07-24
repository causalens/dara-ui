import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareXmark} {...props} />;
};

export default SquareXmark;
