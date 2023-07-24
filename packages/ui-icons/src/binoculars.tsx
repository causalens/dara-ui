import { faBinoculars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Binoculars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Binoculars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBinoculars} {...props} />;
};

export default Binoculars;
