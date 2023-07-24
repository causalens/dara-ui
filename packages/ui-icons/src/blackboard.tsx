import { faBlackboard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Blackboard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Blackboard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBlackboard} {...props} />;
};

export default Blackboard;
