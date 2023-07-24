import { faPumpMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PumpMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PumpMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPumpMedical} {...props} />;
};

export default PumpMedical;
