import { faHillRockslide } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HillRockslide icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HillRockslide = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHillRockslide} {...props} />;
};

export default HillRockslide;
