import { faTheaterMasks } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TheaterMasks icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TheaterMasks = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTheaterMasks} {...props} />;
};

export default TheaterMasks;
