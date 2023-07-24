import { faIcons } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Icons icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Icons = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIcons} {...props} />;
};

export default Icons;
