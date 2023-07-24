import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretSquareLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretSquareLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretSquareLeft} {...props} />;
};

export default CaretSquareLeft;
