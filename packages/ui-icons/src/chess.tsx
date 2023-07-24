import { faChess } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Chess icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Chess = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChess} {...props} />;
};

export default Chess;
