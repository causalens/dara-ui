import { faCarriageBaby } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CarriageBaby icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CarriageBaby = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarriageBaby} {...props} />;
};

export default CarriageBaby;
