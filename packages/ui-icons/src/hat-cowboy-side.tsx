import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HatCowboySide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HatCowboySide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHatCowboySide} {...props} />;
};

export default HatCowboySide;
