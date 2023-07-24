import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RightFromBracket icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RightFromBracket = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRightFromBracket} {...props} />;
};

export default RightFromBracket;
