import { faFileImage } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileImage icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileImage = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileImage} {...props} />;
};

export default FileImage;
