import { faQrcode } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Qrcode icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Qrcode = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faQrcode} {...props} />;
};

export default Qrcode;
