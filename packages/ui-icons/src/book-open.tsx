import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookOpen icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookOpen = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookOpen} {...props} />;
};

export default BookOpen;
