import { faReply } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Reply icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Reply = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faReply} {...props} />;
};

export default Reply;
