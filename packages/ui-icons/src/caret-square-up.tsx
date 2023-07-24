import { faCaretSquareUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretSquareUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretSquareUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretSquareUp} {...props} />;
};

export default CaretSquareUp;
