import { faRightLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * RightLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const RightLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRightLeft} {...props} />;
};

export default RightLeft;
