import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * EllipsisV icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const EllipsisV = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEllipsisV} {...props} />;
};

export default EllipsisV;
