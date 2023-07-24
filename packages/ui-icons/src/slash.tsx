import { faSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Slash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Slash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSlash} {...props} />;
};

export default Slash;
