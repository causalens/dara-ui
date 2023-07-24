import { faFileContract } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileContract icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileContract = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileContract} {...props} />;
};

export default FileContract;
