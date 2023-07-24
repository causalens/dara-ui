import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PauseCircle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PauseCircle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPauseCircle} {...props} />;
};

export default PauseCircle;
