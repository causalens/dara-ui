import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EnvelopeSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EnvelopeSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelopeSquare} {...props} />;
};

export default EnvelopeSquare;
