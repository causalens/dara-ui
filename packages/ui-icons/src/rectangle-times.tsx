import { faRectangleTimes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RectangleTimes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RectangleTimes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRectangleTimes} {...props} />;
};

export default RectangleTimes;
