import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookBookmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookBookmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookBookmark} {...props} />;
};

export default BookBookmark;
