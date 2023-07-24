import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileScreenButton icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileScreenButton = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileScreenButton} {...props} />;
};

export default MobileScreenButton;
