import { faBurn } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Burn icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Burn = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBurn} {...props} />;
};

export default Burn;
