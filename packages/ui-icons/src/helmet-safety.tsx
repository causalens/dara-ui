import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HelmetSafety icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HelmetSafety = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHelmetSafety} {...props} />;
};

export default HelmetSafety;
