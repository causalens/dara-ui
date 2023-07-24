import { faTentArrowsDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TentArrowsDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TentArrowsDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTentArrowsDown} {...props} />;
};

export default TentArrowsDown;
