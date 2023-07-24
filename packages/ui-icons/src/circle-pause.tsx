import { faCirclePause } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CirclePause icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CirclePause = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCirclePause} {...props} />;
};

export default CirclePause;
