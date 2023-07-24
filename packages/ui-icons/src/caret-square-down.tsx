import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretSquareDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretSquareDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretSquareDown} {...props} />;
};

export default CaretSquareDown;
