import { faSheqelSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * SheqelSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const SheqelSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSheqelSign} {...props} />;
};

export default SheqelSign;
