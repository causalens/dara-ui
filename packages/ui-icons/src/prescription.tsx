import { faPrescription } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Prescription icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Prescription = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faPrescription} {...props} />;
};

export default Prescription;
