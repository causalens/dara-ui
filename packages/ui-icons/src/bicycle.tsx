import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bicycle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bicycle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBicycle} {...props} />;
};

export default Bicycle;
