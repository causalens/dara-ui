import { faWeightHanging } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WeightHanging icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WeightHanging = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWeightHanging} {...props} />;
};

export default WeightHanging;
