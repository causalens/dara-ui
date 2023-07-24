import { faFax } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Fax icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Fax = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFax} {...props} />;
};

export default Fax;
