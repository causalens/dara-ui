import { faBalanceScale } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BalanceScale icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BalanceScale = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBalanceScale} {...props} />;
};

export default BalanceScale;
