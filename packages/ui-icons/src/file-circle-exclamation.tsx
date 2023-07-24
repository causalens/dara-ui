import { faFileCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCircleExclamation icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCircleExclamation = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCircleExclamation} {...props} />;
};

export default FileCircleExclamation;
