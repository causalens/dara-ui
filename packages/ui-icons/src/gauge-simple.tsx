import { faGaugeSimple } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GaugeSimple icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GaugeSimple = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGaugeSimple} {...props} />;
};

export default GaugeSimple;
