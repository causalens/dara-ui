import { faFire } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fire icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fire = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFire} {...props} />;
};

export default Fire;
