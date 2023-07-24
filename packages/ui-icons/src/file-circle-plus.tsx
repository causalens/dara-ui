import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileCirclePlus icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileCirclePlus = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileCirclePlus} {...props} />;
};

export default FileCirclePlus;
