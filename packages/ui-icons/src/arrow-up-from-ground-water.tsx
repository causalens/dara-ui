import { faArrowUpFromGroundWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ArrowUpFromGroundWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ArrowUpFromGroundWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faArrowUpFromGroundWater} {...props} />;
};

export default ArrowUpFromGroundWater;
