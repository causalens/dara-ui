import { faStaffAesculapius } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * StaffAesculapius icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const StaffAesculapius = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faStaffAesculapius} {...props} />;
};

export default StaffAesculapius;
