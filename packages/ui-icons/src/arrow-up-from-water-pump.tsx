import { faArrowUpFromWaterPump } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpFromWaterPump icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpFromWaterPump = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpFromWaterPump} {...props} />;
};

export default ArrowUpFromWaterPump;
