import { faEyedropper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Eyedropper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Eyedropper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEyedropper} {...props} />;
};

export default Eyedropper;
