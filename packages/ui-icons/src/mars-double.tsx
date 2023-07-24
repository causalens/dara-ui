import { faMarsDouble } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MarsDouble icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MarsDouble = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMarsDouble} {...props} />;
};

export default MarsDouble;
