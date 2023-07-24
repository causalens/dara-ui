import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WindowRestore icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WindowRestore = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWindowRestore} {...props} />;
};

export default WindowRestore;
