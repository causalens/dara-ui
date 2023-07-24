import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BitcoinSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BitcoinSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBitcoinSign} {...props} />;
};

export default BitcoinSign;
