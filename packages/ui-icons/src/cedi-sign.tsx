import { faCediSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * CediSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const CediSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCediSign} {...props} />;
};

export default CediSign;
