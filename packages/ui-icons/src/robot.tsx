import { faRobot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Robot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Robot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRobot} {...props} />;
};

export default Robot;
