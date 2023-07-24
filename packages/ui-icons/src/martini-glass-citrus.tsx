import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MartiniGlassCitrus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MartiniGlassCitrus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMartiniGlassCitrus} {...props} />;
};

export default MartiniGlassCitrus;
