import { faHeadset } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Headset icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Headset = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHeadset} {...props} />;
};

export default Headset;
