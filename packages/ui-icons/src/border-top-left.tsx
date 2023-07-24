import { faBorderTopLeft } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BorderTopLeft icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BorderTopLeft = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBorderTopLeft} {...props} />;
};

export default BorderTopLeft;
