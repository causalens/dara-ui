import { faPlugCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PlugCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PlugCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlugCircleXmark} {...props} />;
};

export default PlugCircleXmark;
