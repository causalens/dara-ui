import { faDongSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DongSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DongSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDongSign} {...props} />;
};

export default DongSign;
