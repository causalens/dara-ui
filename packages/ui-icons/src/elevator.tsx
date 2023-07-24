import { faElevator } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Elevator icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Elevator = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faElevator} {...props} />;
};

export default Elevator;
