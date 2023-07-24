import { faCarrot } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Carrot icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Carrot = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCarrot} {...props} />;
};

export default Carrot;
