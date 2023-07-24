import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * TachometerAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const TachometerAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTachometerAlt} {...props} />;
};

export default TachometerAlt;
