import { faFrancSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FrancSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FrancSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFrancSign} {...props} />;
};

export default FrancSign;
