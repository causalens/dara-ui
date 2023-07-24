import { faMessage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Message icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Message = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMessage} {...props} />;
};

export default Message;
