import { faTerminal } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Terminal icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Terminal = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTerminal} {...props} />;
};

export default Terminal;
