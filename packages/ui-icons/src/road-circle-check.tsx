import { faRoadCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadCircleCheck} {...props} />;
};

export default RoadCircleCheck;
