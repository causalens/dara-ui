import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RectangleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RectangleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRectangleXmark} {...props} />;
};

export default RectangleXmark;
