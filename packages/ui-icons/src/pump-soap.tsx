import { faPumpSoap } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PumpSoap icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PumpSoap = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPumpSoap} {...props} />;
};

export default PumpSoap;
