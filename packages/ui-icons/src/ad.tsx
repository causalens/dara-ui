import { faAd } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Ad icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Ad = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faAd} {...props} />;
};

export default Ad;
