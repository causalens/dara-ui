import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * DollarSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const DollarSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faDollarSign} {...props} />;
};

export default DollarSign;
