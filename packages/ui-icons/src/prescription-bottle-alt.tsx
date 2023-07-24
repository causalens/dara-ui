import { faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * PrescriptionBottleAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const PrescriptionBottleAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrescriptionBottleAlt} {...props} />;
};

export default PrescriptionBottleAlt;
