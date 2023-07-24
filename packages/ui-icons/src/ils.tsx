import { faIls } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ils icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ils = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faIls} {...props} />;
};

export default Ils;
