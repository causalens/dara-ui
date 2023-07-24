import { faGlassWaterDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassWaterDroplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassWaterDroplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassWaterDroplet} {...props} />;
};

export default GlassWaterDroplet;
