import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RotateRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RotateRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRotateRight} {...props} />;
};

export default RotateRight;
