import { faLandmarkDome } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LandmarkDome icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LandmarkDome = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLandmarkDome} {...props} />;
};

export default LandmarkDome;
