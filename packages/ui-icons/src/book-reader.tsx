import { faBookReader } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookReader icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookReader = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookReader} {...props} />;
};

export default BookReader;
