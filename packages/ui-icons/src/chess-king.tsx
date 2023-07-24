import { faChessKing } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessKing icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessKing = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessKing} {...props} />;
};

export default ChessKing;
