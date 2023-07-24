import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCircleCheck icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCircleCheck = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCircleCheck} {...props} />;
};

export default FileCircleCheck;
