import { faPallet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Pallet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Pallet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPallet} {...props} />;
};

export default Pallet;
