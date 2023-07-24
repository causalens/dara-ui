import { faTachometerAltFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachometerAltFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachometerAltFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometerAltFast} {...props} />;
};

export default TachometerAltFast;
