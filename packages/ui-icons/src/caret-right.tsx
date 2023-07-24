import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretRight} {...props} />;
};

export default CaretRight;
