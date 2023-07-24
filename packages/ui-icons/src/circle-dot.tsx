import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleDot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleDot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleDot} {...props} />;
};

export default CircleDot;
