import { faFileSignature } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * FileSignature icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const FileSignature = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faFileSignature} {...props} />;
};

export default FileSignature;
