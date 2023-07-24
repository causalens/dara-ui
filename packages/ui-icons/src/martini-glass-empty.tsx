import { faMartiniGlassEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MartiniGlassEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MartiniGlassEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMartiniGlassEmpty} {...props} />;
};

export default MartiniGlassEmpty;
