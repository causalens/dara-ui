import { faLandmarkFlag } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LandmarkFlag icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LandmarkFlag = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLandmarkFlag} {...props} />;
};

export default LandmarkFlag;
