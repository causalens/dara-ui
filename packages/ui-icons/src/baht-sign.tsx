import { faBahtSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BahtSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BahtSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBahtSign} {...props} />;
};

export default BahtSign;
