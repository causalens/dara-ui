import { faHelicopter } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Helicopter icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Helicopter = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHelicopter} {...props} />;
};

export default Helicopter;
