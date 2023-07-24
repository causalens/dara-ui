import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Asterisk icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Asterisk = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAsterisk} {...props} />;
};

export default Asterisk;
