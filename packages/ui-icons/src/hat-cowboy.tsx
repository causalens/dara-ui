import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HatCowboy icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HatCowboy = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHatCowboy} {...props} />;
};

export default HatCowboy;
