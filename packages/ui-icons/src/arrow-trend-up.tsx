import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowTrendUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowTrendUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowTrendUp} {...props} />;
};

export default ArrowTrendUp;
