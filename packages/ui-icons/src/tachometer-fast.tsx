import { faTachometerFast } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachometerFast icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachometerFast = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometerFast} {...props} />;
};

export default TachometerFast;
