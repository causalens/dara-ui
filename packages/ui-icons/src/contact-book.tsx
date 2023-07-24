import { faContactBook } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ContactBook icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ContactBook = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faContactBook} {...props} />;
};

export default ContactBook;
