import { faMehRollingEyes } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MehRollingEyes icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MehRollingEyes = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMehRollingEyes} {...props} />;
};

export default MehRollingEyes;
