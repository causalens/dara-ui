import { faRestroom } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Restroom icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Restroom = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRestroom} {...props} />;
};

export default Restroom;
