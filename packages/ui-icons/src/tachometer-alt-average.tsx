import { faTachometerAltAverage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachometerAltAverage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachometerAltAverage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometerAltAverage} {...props} />;
};

export default TachometerAltAverage;
