import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WineGlassAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WineGlassAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWineGlassAlt} {...props} />;
};

export default WineGlassAlt;
