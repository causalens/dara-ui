import { faCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Circle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Circle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircle} {...props} />;
};

export default Circle;
