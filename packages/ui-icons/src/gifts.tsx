import { faGifts } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Gifts icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Gifts = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGifts} {...props} />;
};

export default Gifts;
