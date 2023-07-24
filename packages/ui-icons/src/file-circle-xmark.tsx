import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCircleXmark icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCircleXmark = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCircleXmark} {...props} />;
};

export default FileCircleXmark;
