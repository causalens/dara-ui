import { faCarAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarAlt} {...props} />;
};

export default CarAlt;
