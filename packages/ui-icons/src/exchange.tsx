import { faExchange } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Exchange icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Exchange = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faExchange} {...props} />;
};

export default Exchange;
