import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowCircleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowCircleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowCircleRight} {...props} />;
};

export default ArrowCircleRight;
