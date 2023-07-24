import { faShip } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ship icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ship = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShip} {...props} />;
};

export default Ship;
