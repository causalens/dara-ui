import { faReplyAll } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ReplyAll icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ReplyAll = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faReplyAll} {...props} />;
};

export default ReplyAll;
