import { faSquareCaretDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SquareCaretDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SquareCaretDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSquareCaretDown} {...props} />;
};

export default SquareCaretDown;
