import { fa7 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char7 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char7 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa7} {...props} />;
};

export default char7;
