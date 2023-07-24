import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Crosshairs icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Crosshairs = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCrosshairs} {...props} />;
};

export default Crosshairs;
