import { faVenusDouble } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VenusDouble icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VenusDouble = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVenusDouble} {...props} />;
};

export default VenusDouble;
