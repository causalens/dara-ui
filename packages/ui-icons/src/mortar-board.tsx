import { faMortarBoard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MortarBoard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MortarBoard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMortarBoard} {...props} />;
};

export default MortarBoard;
