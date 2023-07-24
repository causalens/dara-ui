import { faTty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTty} {...props} />;
};

export default Tty;
