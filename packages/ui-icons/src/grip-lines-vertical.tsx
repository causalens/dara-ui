import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GripLinesVertical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GripLinesVertical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGripLinesVertical} {...props} />;
};

export default GripLinesVertical;
