import { faMars } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mars icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mars = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMars} {...props} />;
};

export default Mars;
