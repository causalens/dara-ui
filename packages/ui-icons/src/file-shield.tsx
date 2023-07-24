import { faFileShield } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileShield icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileShield = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileShield} {...props} />;
};

export default FileShield;
