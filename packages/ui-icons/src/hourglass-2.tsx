import { faHourglass2 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hourglass2 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hourglass2 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglass2} {...props} />;
};

export default Hourglass2;
