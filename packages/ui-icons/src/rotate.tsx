import { faRotate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Rotate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Rotate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotate} {...props} />;
};

export default Rotate;
