import { faDollyBox } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DollyBox icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DollyBox = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDollyBox} {...props} />;
};

export default DollyBox;
