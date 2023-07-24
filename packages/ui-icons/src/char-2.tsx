import { fa2 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * char2 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const char2 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={fa2} {...props} />;
};

export default char2;
