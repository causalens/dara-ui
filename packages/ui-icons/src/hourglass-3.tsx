import { faHourglass3 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hourglass3 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hourglass3 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglass3} {...props} />;
};

export default Hourglass3;
