import { faSwimmer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Swimmer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Swimmer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSwimmer} {...props} />;
};

export default Swimmer;
