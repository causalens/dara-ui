import { faBookSkull } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookSkull icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookSkull = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookSkull} {...props} />;
};

export default BookSkull;
