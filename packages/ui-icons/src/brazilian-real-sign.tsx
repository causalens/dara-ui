import { faBrazilianRealSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BrazilianRealSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BrazilianRealSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBrazilianRealSign} {...props} />;
};

export default BrazilianRealSign;
