import { faFireBurner } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FireBurner icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FireBurner = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFireBurner} {...props} />;
};

export default FireBurner;
