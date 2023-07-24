import { faChessPawn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChessPawn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChessPawn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChessPawn} {...props} />;
};

export default ChessPawn;
