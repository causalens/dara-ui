import { faDove } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Dove icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Dove = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDove} {...props} />;
};

export default Dove;
