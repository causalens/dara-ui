import { fa6 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char6 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char6 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa6} {...props} />;
};

export default char6;
