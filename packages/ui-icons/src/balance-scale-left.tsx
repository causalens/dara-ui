import { faBalanceScaleLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BalanceScaleLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BalanceScaleLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBalanceScaleLeft} {...props} />;
};

export default BalanceScaleLeft;
