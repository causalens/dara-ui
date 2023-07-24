import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCaretRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCaretRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCaretRight} {...props} />;
};

export default SquareCaretRight;
