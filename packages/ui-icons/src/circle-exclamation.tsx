import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleExclamation} {...props} />;
};

export default CircleExclamation;
