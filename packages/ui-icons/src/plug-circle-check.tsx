import { faPlugCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCircleCheck} {...props} />;
};

export default PlugCircleCheck;
