import { faClover } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Clover icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Clover = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClover} {...props} />;
};

export default Clover;
