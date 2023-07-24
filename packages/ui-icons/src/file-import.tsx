import { faFileImport } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileImport icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileImport = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileImport} {...props} />;
};

export default FileImport;
