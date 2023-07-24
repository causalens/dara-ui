import { faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCaretLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCaretLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCaretLeft} {...props} />;
};

export default SquareCaretLeft;
