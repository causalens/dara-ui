import { faReceipt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Receipt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Receipt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faReceipt} {...props} />;
};

export default Receipt;
