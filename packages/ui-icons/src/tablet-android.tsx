import { faTabletAndroid } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TabletAndroid icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TabletAndroid = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTabletAndroid} {...props} />;
};

export default TabletAndroid;
