import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Envelope icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Envelope = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEnvelope} {...props} />;
};

export default Envelope;
