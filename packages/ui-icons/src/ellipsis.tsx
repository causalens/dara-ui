import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ellipsis icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ellipsis = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEllipsis} {...props} />;
};

export default Ellipsis;
