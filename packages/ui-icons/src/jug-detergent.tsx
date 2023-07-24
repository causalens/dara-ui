import { faJugDetergent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * JugDetergent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const JugDetergent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faJugDetergent} {...props} />;
};

export default JugDetergent;
