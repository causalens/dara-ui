import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GripVertical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GripVertical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGripVertical} {...props} />;
};

export default GripVertical;
