import { faBug } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bug icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bug = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBug} {...props} />;
};

export default Bug;
