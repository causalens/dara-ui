import { faForwardStep } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ForwardStep icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ForwardStep = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faForwardStep} {...props} />;
};

export default ForwardStep;
