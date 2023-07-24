import { faWonSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * WonSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const WonSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faWonSign} {...props} />;
};

export default WonSign;
