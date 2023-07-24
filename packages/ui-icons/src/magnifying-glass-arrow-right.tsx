import { faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MagnifyingGlassArrowRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MagnifyingGlassArrowRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMagnifyingGlassArrowRight} {...props} />;
};

export default MagnifyingGlassArrowRight;
