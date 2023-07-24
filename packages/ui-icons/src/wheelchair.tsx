import { faWheelchair } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Wheelchair icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Wheelchair = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWheelchair} {...props} />;
};

export default Wheelchair;
