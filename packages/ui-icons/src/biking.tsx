import { faBiking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Biking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Biking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBiking} {...props} />;
};

export default Biking;
