import { faZap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Zap icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Zap = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faZap} {...props} />;
};

export default Zap;
