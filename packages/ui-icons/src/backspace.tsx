import { faBackspace } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Backspace icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Backspace = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBackspace} {...props} />;
};

export default Backspace;
