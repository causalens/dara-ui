import { faCircleH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleH} {...props} />;
};

export default CircleH;
