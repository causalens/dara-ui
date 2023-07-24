import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AddressBook icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AddressBook = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAddressBook} {...props} />;
};

export default AddressBook;
