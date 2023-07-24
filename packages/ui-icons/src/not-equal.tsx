import { faNotEqual } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * NotEqual icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const NotEqual = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faNotEqual} {...props} />;
};

export default NotEqual;
