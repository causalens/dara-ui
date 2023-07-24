import { faBookMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookMedical} {...props} />;
};

export default BookMedical;
