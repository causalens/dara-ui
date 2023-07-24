import { fa1 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char1 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char1 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa1} {...props} />;
};

export default char1;
