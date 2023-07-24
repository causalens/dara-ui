import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowAltCircleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowAltCircleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowAltCircleRight} {...props} />;
};

export default ArrowAltCircleRight;
