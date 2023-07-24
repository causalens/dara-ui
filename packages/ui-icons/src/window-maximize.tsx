import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WindowMaximize icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WindowMaximize = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWindowMaximize} {...props} />;
};

export default WindowMaximize;
