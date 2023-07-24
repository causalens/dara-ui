import { faFileEdit } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileEdit icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileEdit = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileEdit} {...props} />;
};

export default FileEdit;
