import { faSkating } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Skating icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Skating = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSkating} {...props} />;
};

export default Skating;
