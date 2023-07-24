import { faThumbTack } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ThumbTack icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ThumbTack = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faThumbTack} {...props} />;
};

export default ThumbTack;
