import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EnvelopeOpenText icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EnvelopeOpenText = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelopeOpenText} {...props} />;
};

export default EnvelopeOpenText;
