import { faFileZipper } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileZipper icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileZipper = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileZipper} {...props} />;
};

export default FileZipper;
