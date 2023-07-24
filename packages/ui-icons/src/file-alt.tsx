import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileAlt icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileAlt = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileAlt} {...props} />;
};

export default FileAlt;
