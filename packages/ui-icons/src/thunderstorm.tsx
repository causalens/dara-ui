import { faThunderstorm } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Thunderstorm icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Thunderstorm = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThunderstorm} {...props} />;
};

export default Thunderstorm;
