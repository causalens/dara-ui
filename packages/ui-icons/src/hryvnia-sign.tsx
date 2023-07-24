import { faHryvniaSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HryvniaSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HryvniaSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHryvniaSign} {...props} />;
};

export default HryvniaSign;
