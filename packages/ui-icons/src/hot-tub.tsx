import { faHotTub } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HotTub icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HotTub = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHotTub} {...props} />;
};

export default HotTub;
