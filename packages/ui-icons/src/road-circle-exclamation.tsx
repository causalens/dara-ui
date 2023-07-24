import { faRoadCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadCircleExclamation} {...props} />;
};

export default RoadCircleExclamation;
