import { faChildReaching } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChildReaching icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChildReaching = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChildReaching} {...props} />;
};

export default ChildReaching;
