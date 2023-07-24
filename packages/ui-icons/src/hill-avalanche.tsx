import { faHillAvalanche } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * HillAvalanche icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const HillAvalanche = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faHillAvalanche} {...props} />;
};

export default HillAvalanche;
