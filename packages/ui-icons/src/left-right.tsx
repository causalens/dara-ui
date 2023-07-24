import { faLeftRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LeftRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LeftRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLeftRight} {...props} />;
};

export default LeftRight;
