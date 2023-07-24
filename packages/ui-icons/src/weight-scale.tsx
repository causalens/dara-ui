import { faWeightScale } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WeightScale icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WeightScale = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWeightScale} {...props} />;
};

export default WeightScale;
