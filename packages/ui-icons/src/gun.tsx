import { faGun } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gun icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gun = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGun} {...props} />;
};

export default Gun;
