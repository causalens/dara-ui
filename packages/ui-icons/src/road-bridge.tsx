import { faRoadBridge } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadBridge icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadBridge = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadBridge} {...props} />;
};

export default RoadBridge;
