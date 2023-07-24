import { faGlassWater } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlassWater icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlassWater = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlassWater} {...props} />;
};

export default GlassWater;
