import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CircleArrowLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CircleArrowLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCircleArrowLeft} {...props} />;
};

export default CircleArrowLeft;
