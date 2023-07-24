import { faBook } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Book icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Book = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBook} {...props} />;
};

export default Book;
