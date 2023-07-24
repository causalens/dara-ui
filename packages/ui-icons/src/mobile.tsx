import { faMobile } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Mobile icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Mobile = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMobile} {...props} />;
};

export default Mobile;
