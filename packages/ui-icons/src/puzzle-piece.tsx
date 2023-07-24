import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PuzzlePiece icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PuzzlePiece = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPuzzlePiece} {...props} />;
};

export default PuzzlePiece;
