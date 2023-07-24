import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileAndroid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileAndroid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileAndroid} {...props} />;
};

export default MobileAndroid;
