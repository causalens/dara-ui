import { faComputer } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Computer icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Computer = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faComputer} {...props} />;
};

export default Computer;
