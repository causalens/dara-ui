import { faPlay } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Play icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Play = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPlay} {...props} />;
};

export default Play;
