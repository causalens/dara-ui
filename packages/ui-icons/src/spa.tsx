import { faSpa } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Spa icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Spa = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSpa} {...props} />;
};

export default Spa;
