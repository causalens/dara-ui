import { faRoute } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Route icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Route = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRoute} {...props} />;
};

export default Route;
