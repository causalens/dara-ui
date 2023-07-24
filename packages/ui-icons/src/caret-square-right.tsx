import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretSquareRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretSquareRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretSquareRight} {...props} />;
};

export default CaretSquareRight;
