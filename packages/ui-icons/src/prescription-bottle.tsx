import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PrescriptionBottle icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PrescriptionBottle = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrescriptionBottle} {...props} />;
};

export default PrescriptionBottle;
