import { faFileCircleMinus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCircleMinus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCircleMinus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCircleMinus} {...props} />;
};

export default FileCircleMinus;
