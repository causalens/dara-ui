import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowsTurnRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowsTurnRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowsTurnRight} {...props} />;
};

export default ArrowsTurnRight;
