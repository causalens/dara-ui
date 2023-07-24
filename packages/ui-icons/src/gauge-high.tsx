import { faGaugeHigh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GaugeHigh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GaugeHigh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGaugeHigh} {...props} />;
};

export default GaugeHigh;
