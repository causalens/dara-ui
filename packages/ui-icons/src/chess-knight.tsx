import { faChessKnight } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessKnight icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessKnight = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessKnight} {...props} />;
};

export default ChessKnight;
