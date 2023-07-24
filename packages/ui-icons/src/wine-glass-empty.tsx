import { faWineGlassEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WineGlassEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WineGlassEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWineGlassEmpty} {...props} />;
};

export default WineGlassEmpty;
