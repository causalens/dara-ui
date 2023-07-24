import { faFastForward } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FastForward icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FastForward = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFastForward} {...props} />;
};

export default FastForward;
