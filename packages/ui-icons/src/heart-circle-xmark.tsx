import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartCircleXmark} {...props} />;
};

export default HeartCircleXmark;
