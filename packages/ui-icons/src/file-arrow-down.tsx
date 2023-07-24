import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileArrowDown icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileArrowDown = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileArrowDown} {...props} />;
};

export default FileArrowDown;
