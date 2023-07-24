import { faGaugeSimpleHigh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GaugeSimpleHigh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GaugeSimpleHigh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGaugeSimpleHigh} {...props} />;
};

export default GaugeSimpleHigh;
