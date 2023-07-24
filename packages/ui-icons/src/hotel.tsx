import { faHotel } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hotel icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hotel = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHotel} {...props} />;
};

export default Hotel;
