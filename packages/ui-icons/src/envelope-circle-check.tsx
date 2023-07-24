import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EnvelopeCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EnvelopeCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelopeCircleCheck} {...props} />;
};

export default EnvelopeCircleCheck;
