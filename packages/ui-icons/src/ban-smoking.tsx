import { faBanSmoking } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BanSmoking icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BanSmoking = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBanSmoking} {...props} />;
};

export default BanSmoking;
