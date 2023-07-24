import { faHourglass } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hourglass icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hourglass = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglass} {...props} />;
};

export default Hourglass;
