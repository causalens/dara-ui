import { fa5 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char5 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char5 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa5} {...props} />;
};

export default char5;
