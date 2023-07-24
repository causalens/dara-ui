import { fa8 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char8 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char8 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa8} {...props} />;
};

export default char8;
