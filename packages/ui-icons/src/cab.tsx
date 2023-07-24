import { faCab } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cab icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cab = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCab} {...props} />;
};

export default Cab;
