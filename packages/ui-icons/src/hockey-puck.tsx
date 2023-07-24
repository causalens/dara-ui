import { faHockeyPuck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HockeyPuck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HockeyPuck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHockeyPuck} {...props} />;
};

export default HockeyPuck;
