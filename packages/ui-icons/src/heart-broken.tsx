import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HeartBroken icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HeartBroken = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeartBroken} {...props} />;
};

export default HeartBroken;
