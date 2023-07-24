import { faTent } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tent icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tent = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTent} {...props} />;
};

export default Tent;
