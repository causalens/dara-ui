import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WindowMinimize icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WindowMinimize = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWindowMinimize} {...props} />;
};

export default WindowMinimize;
