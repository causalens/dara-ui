import { faWalkieTalkie } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WalkieTalkie icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WalkieTalkie = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWalkieTalkie} {...props} />;
};

export default WalkieTalkie;
