import { fa4 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char4 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char4 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa4} {...props} />;
};

export default char4;
