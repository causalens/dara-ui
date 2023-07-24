import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RotateLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RotateLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotateLeft} {...props} />;
};

export default RotateLeft;
