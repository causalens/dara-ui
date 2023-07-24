import { faStepBackward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StepBackward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StepBackward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStepBackward} {...props} />;
};

export default StepBackward;
