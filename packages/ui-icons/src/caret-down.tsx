import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CaretDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CaretDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCaretDown} {...props} />;
};

export default CaretDown;
