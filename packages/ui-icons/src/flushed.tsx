import { faFlushed } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Flushed icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Flushed = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFlushed} {...props} />;
};

export default Flushed;
