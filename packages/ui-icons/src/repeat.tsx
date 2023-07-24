import { faRepeat } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Repeat icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Repeat = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRepeat} {...props} />;
};

export default Repeat;
