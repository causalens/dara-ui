import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SkullCrossbones icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SkullCrossbones = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSkullCrossbones} {...props} />;
};

export default SkullCrossbones;
