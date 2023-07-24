import { faCalculator } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Calculator icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Calculator = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCalculator} {...props} />;
};

export default Calculator;
