import { faLandMineOn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LandMineOn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LandMineOn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLandMineOn} {...props} />;
};

export default LandMineOn;
