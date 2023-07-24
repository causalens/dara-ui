import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WindowClose icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WindowClose = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWindowClose} {...props} />;
};

export default WindowClose;
