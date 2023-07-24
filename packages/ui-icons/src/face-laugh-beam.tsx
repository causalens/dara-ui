import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FaceLaughBeam icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FaceLaughBeam = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFaceLaughBeam} {...props} />;
};

export default FaceLaughBeam;
