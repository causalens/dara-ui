import { faRoadLock } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadLock icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadLock = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadLock} {...props} />;
};

export default RoadLock;
