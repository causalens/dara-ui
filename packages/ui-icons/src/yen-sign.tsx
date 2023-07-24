import { faYenSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * YenSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const YenSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faYenSign} {...props} />;
};

export default YenSign;
