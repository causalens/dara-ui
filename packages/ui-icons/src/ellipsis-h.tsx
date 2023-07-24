import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EllipsisH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EllipsisH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEllipsisH} {...props} />;
};

export default EllipsisH;
