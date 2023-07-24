import { faTachometerAverage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachometerAverage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachometerAverage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometerAverage} {...props} />;
};

export default TachometerAverage;
