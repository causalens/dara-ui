import { faDroplet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Droplet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Droplet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDroplet} {...props} />;
};

export default Droplet;
