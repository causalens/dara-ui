import { faHSquare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HSquare icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HSquare = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHSquare} {...props} />;
};

export default HSquare;
