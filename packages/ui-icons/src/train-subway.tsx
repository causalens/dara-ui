import { faTrainSubway } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrainSubway icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrainSubway = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrainSubway} {...props} />;
};

export default TrainSubway;
