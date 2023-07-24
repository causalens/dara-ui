import { faVialCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VialCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VialCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVialCircleCheck} {...props} />;
};

export default VialCircleCheck;
