import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hourglass1 icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hourglass1 = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHourglass1} {...props} />;
};

export default Hourglass1;
