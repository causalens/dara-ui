import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileScreen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileScreen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileScreen} {...props} />;
};

export default MobileScreen;
