import { faMaskVentilator } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MaskVentilator icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MaskVentilator = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMaskVentilator} {...props} />;
};

export default MaskVentilator;
