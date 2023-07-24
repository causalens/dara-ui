import { faStaffSnake } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StaffSnake icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StaffSnake = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStaffSnake} {...props} />;
};

export default StaffSnake;
