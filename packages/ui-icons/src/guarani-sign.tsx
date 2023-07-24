import { faGuaraniSign } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GuaraniSign icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GuaraniSign = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGuaraniSign} {...props} />;
};

export default GuaraniSign;
