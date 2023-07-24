import { faCentSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CentSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CentSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCentSign} {...props} />;
};

export default CentSign;
