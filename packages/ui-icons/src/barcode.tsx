import { faBarcode } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Barcode icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Barcode = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBarcode} {...props} />;
};

export default Barcode;
