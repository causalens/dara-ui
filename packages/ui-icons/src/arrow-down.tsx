import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowDown} {...props} />;
};

export default ArrowDown;
