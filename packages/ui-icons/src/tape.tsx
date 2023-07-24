import { faTape } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tape icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tape = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTape} {...props} />;
};

export default Tape;
