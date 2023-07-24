import { faBackward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Backward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Backward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBackward} {...props} />;
};

export default Backward;
