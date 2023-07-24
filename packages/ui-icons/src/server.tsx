import { faServer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Server icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Server = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faServer} {...props} />;
};

export default Server;
