import { faStoreAltSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StoreAltSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StoreAltSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStoreAltSlash} {...props} />;
};

export default StoreAltSlash;
