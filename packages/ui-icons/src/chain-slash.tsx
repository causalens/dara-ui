import { faChainSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ChainSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ChainSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChainSlash} {...props} />;
};

export default ChainSlash;
