import { faFutbol } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Futbol icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Futbol = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFutbol} {...props} />;
};

export default Futbol;
