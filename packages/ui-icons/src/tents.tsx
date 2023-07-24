import { faTents } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Tents icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Tents = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faTents} {...props} />;
};

export default Tents;
