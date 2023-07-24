import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClosedCaptioning icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClosedCaptioning = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClosedCaptioning} {...props} />;
};

export default ClosedCaptioning;
