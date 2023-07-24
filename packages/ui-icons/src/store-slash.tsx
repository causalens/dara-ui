import { faStoreSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StoreSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StoreSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStoreSlash} {...props} />;
};

export default StoreSlash;
