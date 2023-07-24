import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookOpenReader icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookOpenReader = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookOpenReader} {...props} />;
};

export default BookOpenReader;
