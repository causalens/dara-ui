import { faPause } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pause icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pause = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPause} {...props} />;
};

export default Pause;
