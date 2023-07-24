import { faHdd } from '@fortawesome/free-regular-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hdd icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hdd = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHdd} {...props} />;
};

export default Hdd;
