import { faRoadCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RoadCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RoadCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoadCircleXmark} {...props} />;
};

export default RoadCircleXmark;
