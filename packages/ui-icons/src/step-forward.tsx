import { faStepForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StepForward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StepForward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStepForward} {...props} />;
};

export default StepForward;
