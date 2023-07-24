import { faTabletAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TabletAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TabletAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTabletAlt} {...props} />;
};

export default TabletAlt;
