import { faSuitcaseRolling } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SuitcaseRolling icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SuitcaseRolling = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSuitcaseRolling} {...props} />;
};

export default SuitcaseRolling;
