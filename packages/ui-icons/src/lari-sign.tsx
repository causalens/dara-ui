import { faLariSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LariSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LariSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLariSign} {...props} />;
};

export default LariSign;
