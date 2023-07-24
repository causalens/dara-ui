import { faManatSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ManatSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ManatSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faManatSign} {...props} />;
};

export default ManatSign;
