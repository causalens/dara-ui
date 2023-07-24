import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BalanceScaleRight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BalanceScaleRight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBalanceScaleRight} {...props} />;
};

export default BalanceScaleRight;
