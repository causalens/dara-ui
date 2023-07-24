import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BackwardStep icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BackwardStep = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBackwardStep} {...props} />;
};

export default BackwardStep;
