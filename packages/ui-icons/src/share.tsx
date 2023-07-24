import { faShare } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Share icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Share = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faShare} {...props} />;
};

export default Share;
