import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TabletScreenButton icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TabletScreenButton = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTabletScreenButton} {...props} />;
};

export default TabletScreenButton;
