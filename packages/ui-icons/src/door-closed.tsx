import { faDoorClosed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DoorClosed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DoorClosed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDoorClosed} {...props} />;
};

export default DoorClosed;
