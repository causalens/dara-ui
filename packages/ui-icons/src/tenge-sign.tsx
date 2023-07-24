import { faTengeSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TengeSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TengeSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTengeSign} {...props} />;
};

export default TengeSign;
