import { faDirections } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Directions icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Directions = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDirections} {...props} />;
};

export default Directions;
