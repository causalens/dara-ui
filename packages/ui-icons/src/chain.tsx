import { faChain } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Chain icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Chain = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faChain} {...props} />;
};

export default Chain;
