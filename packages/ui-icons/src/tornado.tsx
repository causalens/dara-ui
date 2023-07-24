import { faTornado } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tornado icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tornado = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTornado} {...props} />;
};

export default Tornado;
