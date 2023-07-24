import { fa3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa3} {...props} />;
};

export default char3;
