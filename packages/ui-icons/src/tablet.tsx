import { faTablet } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tablet icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tablet = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTablet} {...props} />;
};

export default Tablet;
