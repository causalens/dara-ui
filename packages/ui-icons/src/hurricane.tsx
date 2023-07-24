import { faHurricane } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Hurricane icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Hurricane = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHurricane} {...props} />;
};

export default Hurricane;
