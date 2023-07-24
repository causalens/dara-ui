import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Heart icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Heart = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeart} {...props} />;
};

export default Heart;
