import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Biohazard icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Biohazard = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBiohazard} {...props} />;
};

export default Biohazard;
