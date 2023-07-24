import { faTabletButton } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TabletButton icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TabletButton = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTabletButton} {...props} />;
};

export default TabletButton;
