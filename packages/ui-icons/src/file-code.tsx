import { faFileCode } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCode icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCode = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCode} {...props} />;
};

export default FileCode;
