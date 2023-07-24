import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowRightLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowRightLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowRightLong} {...props} />;
};

export default ArrowRightLong;
