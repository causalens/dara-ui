import { faChessRook } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessRook icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessRook = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessRook} {...props} />;
};

export default ChessRook;
