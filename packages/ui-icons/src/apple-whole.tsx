import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AppleWhole icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AppleWhole = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAppleWhole} {...props} />;
};

export default AppleWhole;
