import { faMortarPestle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MortarPestle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MortarPestle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMortarPestle} {...props} />;
};

export default MortarPestle;
