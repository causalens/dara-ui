import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EnvelopeOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EnvelopeOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelopeOpen} {...props} />;
};

export default EnvelopeOpen;
