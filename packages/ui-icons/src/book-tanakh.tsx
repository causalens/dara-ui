import { faBookTanakh } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookTanakh icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookTanakh = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookTanakh} {...props} />;
};

export default BookTanakh;
