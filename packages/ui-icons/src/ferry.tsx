import { faFerry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ferry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ferry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFerry} {...props} />;
};

export default Ferry;
