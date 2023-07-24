import { faRadiation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Radiation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Radiation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faRadiation} {...props} />;
};

export default Radiation;
