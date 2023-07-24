import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DoorOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DoorOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDoorOpen} {...props} />;
};

export default DoorOpen;
