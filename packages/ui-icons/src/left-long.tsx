import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LeftLong icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LeftLong = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLeftLong} {...props} />;
};

export default LeftLong;
