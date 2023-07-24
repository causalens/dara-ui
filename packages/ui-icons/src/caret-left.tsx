import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretLeft} {...props} />;
};

export default CaretLeft;
