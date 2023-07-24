import { faLiraSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * LiraSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const LiraSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faLiraSign} {...props} />;
};

export default LiraSign;
