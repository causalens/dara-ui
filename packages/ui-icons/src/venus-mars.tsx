import { faVenusMars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VenusMars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VenusMars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVenusMars} {...props} />;
};

export default VenusMars;
