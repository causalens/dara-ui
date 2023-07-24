import { faBookQuran } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookQuran icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookQuran = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookQuran} {...props} />;
};

export default BookQuran;
