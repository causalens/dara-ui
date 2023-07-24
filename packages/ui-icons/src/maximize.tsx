import { faMaximize } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Maximize icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Maximize = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMaximize} {...props} />;
};

export default Maximize;
