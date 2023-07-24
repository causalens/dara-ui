import { faStopCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StopCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StopCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStopCircle} {...props} />;
};

export default StopCircle;
