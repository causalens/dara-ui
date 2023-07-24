import { faListSquares } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ListSquares icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ListSquares = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faListSquares} {...props} />;
};

export default ListSquares;
