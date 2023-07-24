import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RightToBracket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RightToBracket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRightToBracket} {...props} />;
};

export default RightToBracket;
