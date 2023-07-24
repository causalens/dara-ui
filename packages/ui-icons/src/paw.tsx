import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Paw icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Paw = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPaw} {...props} />;
};

export default Paw;
