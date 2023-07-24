import { faCoins } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Coins icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Coins = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCoins} {...props} />;
};

export default Coins;
