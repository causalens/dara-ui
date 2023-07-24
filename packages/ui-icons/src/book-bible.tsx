import { faBookBible } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookBible icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookBible = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookBible} {...props} />;
};

export default BookBible;
