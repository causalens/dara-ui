import { faScrollTorah } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ScrollTorah icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ScrollTorah = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScrollTorah} {...props} />;
};

export default ScrollTorah;
