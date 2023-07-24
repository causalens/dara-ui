import { faSprout } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Sprout icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Sprout = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSprout} {...props} />;
};

export default Sprout;
