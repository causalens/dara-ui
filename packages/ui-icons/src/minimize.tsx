import { faMinimize } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Minimize icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Minimize = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMinimize} {...props} />;
};

export default Minimize;
