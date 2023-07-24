import { faAngry } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Angry icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Angry = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAngry} {...props} />;
};

export default Angry;
