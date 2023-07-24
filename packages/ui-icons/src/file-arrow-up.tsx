import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileArrowUp icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileArrowUp = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileArrowUp} {...props} />;
};

export default FileArrowUp;
