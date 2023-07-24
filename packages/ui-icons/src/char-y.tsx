import { faY } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * charY icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const charY = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faY} {...props} />;
};

export default charY;
