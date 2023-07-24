import { faFingerprint } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fingerprint icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fingerprint = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFingerprint} {...props} />;
};

export default Fingerprint;
