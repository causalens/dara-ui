import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleNotch icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleNotch = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleNotch} {...props} />;
};

export default CircleNotch;
