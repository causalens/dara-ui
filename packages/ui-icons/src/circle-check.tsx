import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleCheck} {...props} />;
};

export default CircleCheck;
