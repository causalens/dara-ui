import { faBullseye } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bullseye icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bullseye = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBullseye} {...props} />;
};

export default Bullseye;
