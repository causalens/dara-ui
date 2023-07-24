import { faMillSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * MillSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const MillSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faMillSign} {...props} />;
};

export default MillSign;
