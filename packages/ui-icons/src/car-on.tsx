import { faCarOn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarOn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarOn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarOn} {...props} />;
};

export default CarOn;
