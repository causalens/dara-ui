import { faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCaretUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCaretUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCaretUp} {...props} />;
};

export default SquareCaretUp;
