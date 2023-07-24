import { fa0 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char0 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char0 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa0} {...props} />;
};

export default char0;
