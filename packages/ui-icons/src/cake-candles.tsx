import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CakeCandles icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CakeCandles = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCakeCandles} {...props} />;
};

export default CakeCandles;
