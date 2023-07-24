import { faEject } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Eject icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Eject = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faEject} {...props} />;
};

export default Eject;
