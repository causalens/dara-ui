import { faChainBroken } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChainBroken icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChainBroken = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChainBroken} {...props} />;
};

export default ChainBroken;
