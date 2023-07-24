import { faToriiGate } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ToriiGate icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ToriiGate = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faToriiGate} {...props} />;
};

export default ToriiGate;
