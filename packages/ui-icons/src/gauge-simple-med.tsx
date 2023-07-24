import { faGaugeSimpleMed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GaugeSimpleMed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GaugeSimpleMed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGaugeSimpleMed} {...props} />;
};

export default GaugeSimpleMed;
