import { faCannabis } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cannabis icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cannabis = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCannabis} {...props} />;
};

export default Cannabis;
