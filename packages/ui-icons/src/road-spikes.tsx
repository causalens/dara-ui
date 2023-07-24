import { faRoadSpikes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadSpikes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadSpikes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadSpikes} {...props} />;
};

export default RoadSpikes;
