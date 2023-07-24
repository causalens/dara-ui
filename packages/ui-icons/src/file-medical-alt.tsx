import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileMedicalAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileMedicalAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileMedicalAlt} {...props} />;
};

export default FileMedicalAlt;
