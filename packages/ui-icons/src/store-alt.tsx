import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StoreAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StoreAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStoreAlt} {...props} />;
};

export default StoreAlt;
