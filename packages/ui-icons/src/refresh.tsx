import { faRefresh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Refresh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Refresh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRefresh} {...props} />;
};

export default Refresh;
