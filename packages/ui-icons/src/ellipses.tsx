import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * An Ellipses icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ellipses = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEllipsisH} {...props} />;
};

export default Ellipses;
