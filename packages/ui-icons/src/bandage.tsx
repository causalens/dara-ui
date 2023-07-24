import { faBandage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Bandage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Bandage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBandage} {...props} />;
};

export default Bandage;
