import { faFilePrescription } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FilePrescription icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FilePrescription = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFilePrescription} {...props} />;
};

export default FilePrescription;
