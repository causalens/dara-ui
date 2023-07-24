import { faBookDead } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BookDead icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BookDead = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBookDead} {...props} />;
};

export default BookDead;
