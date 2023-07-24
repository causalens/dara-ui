import { faScroll } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Scroll icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Scroll = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faScroll} {...props} />;
};

export default Scroll;
