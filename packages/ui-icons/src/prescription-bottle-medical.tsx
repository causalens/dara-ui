import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PrescriptionBottleMedical icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PrescriptionBottleMedical = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrescriptionBottleMedical} {...props} />;
};

export default PrescriptionBottleMedical;
