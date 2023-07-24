import { faMobileButton } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileButton icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileButton = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileButton} {...props} />;
};

export default MobileButton;
