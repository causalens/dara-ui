import { faChessBishop } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessBishop icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessBishop = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessBishop} {...props} />;
};

export default ChessBishop;
