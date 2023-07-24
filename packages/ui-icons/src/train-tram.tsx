import { faTrainTram } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TrainTram icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TrainTram = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTrainTram} {...props} />;
};

export default TrainTram;
