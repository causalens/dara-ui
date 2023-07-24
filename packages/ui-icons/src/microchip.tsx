import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Microchip icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Microchip = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMicrochip} {...props} />;
};

export default Microchip;
