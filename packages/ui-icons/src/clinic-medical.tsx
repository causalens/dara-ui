import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * ClinicMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const ClinicMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faClinicMedical} {...props} />;
};

export default ClinicMedical;
