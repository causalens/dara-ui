import { faSignature } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Signature icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Signature = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSignature} {...props} />;
};

export default Signature;
