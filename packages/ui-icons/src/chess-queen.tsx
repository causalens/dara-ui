import { faChessQueen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessQueen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessQueen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessQueen} {...props} />;
};

export default ChessQueen;
