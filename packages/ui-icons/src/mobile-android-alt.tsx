import { faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MobileAndroidAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MobileAndroidAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobileAndroidAlt} {...props} />;
};

export default MobileAndroidAlt;
