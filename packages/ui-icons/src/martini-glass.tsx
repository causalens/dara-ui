import { faMartiniGlass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MartiniGlass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MartiniGlass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMartiniGlass} {...props} />;
};

export default MartiniGlass;
