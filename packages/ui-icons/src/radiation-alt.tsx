import { faRadiationAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RadiationAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RadiationAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRadiationAlt} {...props} />;
};

export default RadiationAlt;
