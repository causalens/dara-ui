import { faRoadBarrier } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadBarrier icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadBarrier = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadBarrier} {...props} />;
};

export default RoadBarrier;
