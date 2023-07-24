import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AppleAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AppleAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAppleAlt} {...props} />;
};

export default AppleAlt;
