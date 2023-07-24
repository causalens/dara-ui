import { faRightLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RightLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RightLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRightLong} {...props} />;
};

export default RightLong;
