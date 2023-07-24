import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bookmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bookmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookmark} {...props} />;
};

export default Bookmark;
