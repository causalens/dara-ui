import { faChessBoard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessBoard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessBoard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessBoard} {...props} />;
};

export default ChessBoard;
