import { faLandmarkAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LandmarkAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LandmarkAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLandmarkAlt} {...props} />;
};

export default LandmarkAlt;
