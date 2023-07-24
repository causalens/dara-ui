import { faXRay } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * XRay icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const XRay = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faXRay} {...props} />;
};

export default XRay;
