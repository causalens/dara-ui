import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * AddressCard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const AddressCard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAddressCard} {...props} />;
};

export default AddressCard;
