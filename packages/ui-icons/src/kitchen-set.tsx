import { faKitchenSet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * KitchenSet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const KitchenSet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faKitchenSet} {...props} />;
};

export default KitchenSet;
