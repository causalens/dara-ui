import { faArrowTrendDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowTrendDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowTrendDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowTrendDown} {...props} />;
};

export default ArrowTrendDown;
