import { faPollH } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PollH icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PollH = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPollH} {...props} />;
};

export default PollH;
