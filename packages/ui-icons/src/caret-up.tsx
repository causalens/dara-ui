import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretUp} {...props} />;
};

export default CaretUp;
