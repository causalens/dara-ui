import { faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsUpDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsUpDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsUpDown} {...props} />;
};

export default ArrowsUpDown;
